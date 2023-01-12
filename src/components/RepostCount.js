import axios from "axios";
import { useContext, useState } from "react"
import { BiRepost } from "react-icons/bi"
import styled from "styled-components"
import swal from "sweetalert";
import { BASE_URL } from "../constants/url";
import { AuthContext } from "../contexts/AuthContext";
import ModalConfirm from "./ModalConfirm";

export default function RepostCount({ count ,postId,setReloadPosts}) {
    
    const [openModal, setOpenModal] = useState(false);
    const { config: token } = useContext(AuthContext);
    const config = { headers: { Authorization: `Bearer ${token}` } };
 function sharePost(){
    axios.post(`${BASE_URL}/repost/${postId}`,{}, config)
      .then(() => {
        swal("Sucess!", "Reposted!", "success");
        setOpenModal(false)
        setReloadPosts({})
      })
      .catch(err => {

        swal("There was an error reposting this post", `${err.message}: ${err.response.data}`);

        setOpenModal(false)
      })
}
    return (
        <>
        <RepostIcon onClick={() => setOpenModal(true)}>
            <BiRepost /> <p>{count}  re-post</p>
            </RepostIcon>
            {openModal ?
                <ModalConfirm >
                    <section>
                        <h1>
                        Do you want to re-post
                        this link? 
                        </h1>
                    <div>
                    <button onClick={() => setOpenModal(false)}>
                    No, cancel
                    </button>
                    <button onClick={sharePost}>
                    Yes, share!
                    </button>
                    </div>
                    </section>
                   
                </ModalConfirm>
                :
                <></>
            }
       </>
    )
}
const RepostIcon = styled.div`
display:flex;
flex-direction:column;
align-items:center;
color: #FFFFFF;
margin-top:19px;
font-size: 22px;
width:50px;
p{
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;

}

`
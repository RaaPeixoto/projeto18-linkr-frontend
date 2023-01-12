import { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import { IoPaperPlaneOutline } from "react-icons/io5";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { MEDIA_QUERIES } from "../constants/mediaQueries";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from '../contexts/UserContext';
import CommentComponent from './CommentComponent';

export default function Comments(props) {

    const { postId, commentCounter, setCommentCounter } = props;
    const [userComment, setUserComment] = useState("");
    const [postComment, setPostComment] = useState(true);
    const [listComments, setListComments] = useState([]);

    const { config: token } = useContext(AuthContext);
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const { user } = useContext(UserContext);
    const { image } = user;

    useEffect(() => {

        const promise = axios.get(`${BASE_URL}/posts/${postId}/comments`, config);

        promise.then((res) => {
            setListComments(res.data[1]);
        });

        promise.catch((error) => console.log(error.message));
    }, []);


    function sendComment() {

        if(userComment.length !== 0){

            const body = {
                comment: userComment
            };

            const promise = axios.post(`${BASE_URL}/posts/${postId}/comment`, body,  config);

            promise.then((res) => {
                setUserComment("");
                setPostComment(true);
                setCommentCounter(parseInt(commentCounter) + 1);
            });

            promise.catch((error) => {
                console.log(error.message);
            });
        }

    }

    return (
        <Container>
            <ContainerComments>

                {listComments.map((info, index) => 
                    <CommentComponent 
                        key={index}
                        username={info.username}
                        image={info.image}
                        userCId={info.userId}
                        comment={info.comment}
                    />
                )}

            </ContainerComments>

            <CommentInput>
                <img src={image} alt="User" />
                <input
                    type="text"
                    placeholder="write a comment..."
                    onChange={(e) => setUserComment(e.target.value)}
                    value={userComment}
                    required
                />
                <button onClick={sendComment}>
                    <IoPaperPlaneOutline color="#fff" size={18} />
                </button>
            </CommentInput>
        </Container>
    )

}

const Container = styled.div`
    width: 100%;
    min-height: 299px;
    background-color: #1E1E1E;
    margin-bottom: 44px;
    margin-top: -26px;
    box-sizing: border-box;
    padding-top: 10px;
    border-radius: 0  0 16px 16px;

    img {
        width: 45px;
        border-radius: 50%; 
    }

    @media ${MEDIA_QUERIES.mobile} {
        border-radius: 0px;
        width: 100vw;
  }
`;

const ContainerComments = styled.div`
    margin-left: 3%;
    overflow-y: scroll;
    height: 200px;

    ::-webkit-scrollbar {
        display: none;
    }
`;

const CommentInput = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 2vh;
    
    input{
        color: white;
        box-sizing: border-box;
        padding: 10px;
        background-color: #252525;
        width: 85%;
        height: 40px;
        border: none;
        border-radius: 8px;
        ::placeholder{
            font-style: italic;
        }
    }

    button{
        background-color: transparent;
        border: none;
        position: absolute;
        right: 15px;
        top: 9px;
    }
`;




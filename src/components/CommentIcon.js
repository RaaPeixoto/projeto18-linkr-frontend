import { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import {AiOutlineComment} from "react-icons/ai"
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { MEDIA_QUERIES } from "../constants/mediaQueries";
import { AuthContext } from "../contexts/AuthContext";

export default function CommentIcon(props) {

    const { postId, setOpenComment, openComment } = props;

    const [commentCounter, setCommentCounter] = useState(0);

    const { config: token } = useContext(AuthContext);
    const config = { headers: { Authorization: `Bearer ${token}` } };

    useEffect(() => {
      
        const promise = axios.get(`${BASE_URL}/posts/${postId}/comments`, config);

        promise.then((res) => {
            setCommentCounter(res.data[0].comments);
        });

        promise.catch((error) => console.log(error.message));
    }, []);

    function openCommentContainer(){
        if(openComment){
            setOpenComment(false);
        } else {
            setOpenComment(true);
        }
    }

    return (
                <Container>
                    <Comment onClick={openCommentContainer}>
                    <AiOutlineComment color="#fff" size={25} />
                    </Comment >
                    <p>{commentCounter} <br></br> {commentCounter == 1 ? "comentário" : "comentários"}</p>
                </Container>
    )

}

const Comment = styled.div`
    color: #FFFFFF;
    cursor: pointer;
`;

const Container = styled.div`
    margin-top: 19px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 12%;

    font-family: 'Lato';
    font-style: normal;
    font-size: 11px;
    line-height: 13px;

    p{
        font-weight: 400;
        color: #FFFFFF;
        padding-top: 5%;
    }

    @media ${MEDIA_QUERIES.mobile}{
        font-size: 9px;
    }
`;

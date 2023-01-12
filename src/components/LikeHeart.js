import { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { MEDIA_QUERIES } from "../constants/mediaQueries";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from '../contexts/UserContext';

export default function LikeHeart(props) {

    const { postId } = props;

    let message;

    const [liked, setLiked] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);
    const [whoLiked, setWhoLiked] = useState([]);
    const [tooltipMessage, setTooltipMessage] = useState("");

    const { config: token } = useContext(AuthContext);
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const { user } = useContext(UserContext);
    const { userId } = user;

    useEffect(() => {
      
        const promise = axios.get(`${BASE_URL}/likes/${postId}`, config);

        promise.then((res) => {
            setWhoLiked(res.data[1]);

            res.data[1].map((u) => {
               
                if (u.userId == userId) {
                    setLiked(true);
                }
            });

            setLikeCounter(res.data[0].likes);
        });

        promise.catch((error) => console.log(error.message));
    }, []);

    function changeLike() {

        if (!liked) {
            const promise = axios.post(`${BASE_URL}/like/${postId}`, {}, config);

            promise.then((res) => {
                setLikeCounter(parseInt(likeCounter) + 1);
                changeTooltip(whoLiked, setTooltipMessage, parseInt(likeCounter) + 1);
            });

            promise.catch((error) => {
                console.log(error.message);
                setLiked(false);
            });
        } else {
            const promise = axios.post(`${BASE_URL}/dislike/${postId}`,{},  config);

            promise.then((res) => {
                setLikeCounter(parseInt(likeCounter) - 1);
                changeTooltip(whoLiked, setTooltipMessage, parseInt(likeCounter) - 1);
            });

            promise.catch((error) => {
                console.log(error.message);
                setLiked(false);
            });
        }

        setLiked(!liked);

    }

    function changeTooltip(whoLiked, setTooltipMessage, likes) {

        if (!liked) {
            switch (parseInt(likes)) {
                case 0:
                    message = "Ninguém curtiu esse post ainda";

                    break;
                case 1:
                    message = "Você curtiu esse post"
                    break;

                case 2:
                    message = `Você e ${whoLiked[0].username} curtiram esse post`
                    break;

                case 3:
                    message = `Você, ${whoLiked[0].username} e ${whoLiked[1].username} curtiram esse post`
                    break;

                default:
                    message = `Você, ${whoLiked[0].username}, ${whoLiked[1].username} e mais ${whoLiked.length - 2} curtiram esse post`
                    break;

            }
            setTooltipMessage(message);
        } else {
            switch (parseInt(likes)) {
                case 0:
                    message = "Ninguém curtiu esse post ainda";
                    break;

                case 1:
                    message = `${whoLiked[0].username} curtiu esse post`
                    break;

                case 2:
                    message = `${whoLiked[0].username} e ${whoLiked[1].username} curtiram esse post`
                    break;

                case 3:
                    message = `${whoLiked[0].username}, ${whoLiked[1].username} e ${whoLiked[2].username} curtiram esse post`
                    break;
                default:
                    message = `${whoLiked[0].username}, ${whoLiked[1].username}, ${whoLiked[2].username} e mais ${whoLiked.length - 3} curtiram esse post`
                    break;
            }
            setTooltipMessage(message);
        }
    }

    return (
        <>
            {liked ? (
                <Container>
                    <Heart liked={liked}>
                        <ion-icon data-tip={tooltipMessage} data-for="text" onClick={changeLike} name="heart"></ion-icon>
                        <ReactTooltip id="text" effect="solid" place="bottom" type="light" />
                    </Heart>
                    <p>{likeCounter} {likeCounter == 1 ? "like" : "likes"}</p>
                </Container>
            ) : (
                <Container>
                    <Heart liked={liked}>
                        <ion-icon data-tip={tooltipMessage} data-for="text" onClick={changeLike} name="heart-outline"></ion-icon>
                        <ReactTooltip id="text" effect="solid" place="bottom" type="light" />
                    </Heart>
                    <p>{likeCounter} {likeCounter == 1 ? "like" : "likes"}</p>
                </Container>
            )}
        </>
    )

}

const Heart = styled.div`
    font-size: 22px;
    color: ${props => props.liked ? "#AC0000" : "#FFFFFF"};
    cursor: pointer;

    @media ${MEDIA_QUERIES.mobile}{
        font-size: 14px;
    }
`;

const Container = styled.div`
    margin-top: 19px;

    display: flex;
    flex-direction: column;
    padding-left: 22%;

    font-family: 'Lato';
    font-style: normal;
    font-size: 11px;
    line-height: 13px;

    p{
        font-weight: 400;
        color: #FFFFFF;

        padding-top: 5%;
    }

    span{
        font-weight: 700;
        color: #505050;
    }

    @media ${MEDIA_QUERIES.mobile}{
        font-size: 9px;
    }
`;

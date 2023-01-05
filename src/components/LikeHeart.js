import { useState, useEffect } from 'react';
import styled from "styled-components";
import ReactTooltip from 'react-tooltip';
import { MEDIA_QUERIES } from "../constants/mediaQueries";

export default function LikeHeart() {

    const [liked, setLiked] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);
    const [tooltipMessage, setTooltipMessage] = useState("");

    function changeLike() {
        if (!liked) {
            setLikeCounter(likeCounter + 1)
            setTooltipMessage("opa like");
        } else {
            setLikeCounter(likeCounter - 1)
            setTooltipMessage("opa dislike");
        }
        setLiked(!likeCounter)
    }

    return (
        <>
            {liked ? (
                <Container>
                    <Heart liked={liked}>
                        <ion-icon data-tip={tooltipMessage} data-for="text" onClick={changeLike} name="heart"></ion-icon>
                        <ReactTooltip id="text" effect="solid" place="bottom" type="light"/>
                    </Heart>
                    <p>{likeCounter} {likeCounter === 1 ? "like" : "likes"}</p>
                </Container>
            ) : (
                <Container>
                    <Heart liked={liked}>
                        <ion-icon data-tip={tooltipMessage} data-for="text" onClick={changeLike} name="heart-outline"></ion-icon>
                        <ReactTooltip id="text" effect="solid" place="bottom" type="light"/>
                    </Heart>
                    <p>{likeCounter} {likeCounter === 1 ? "like" : "likes"}</p>
                </Container>
            )}
        </>
    )

}

const Heart = styled.div`
    font-size: 22px;
    color: ${props => props.liked ? "#AC0000" : ""};
    cursor: pointer;

    @media ${MEDIA_QUERIES.mobile}{
        font-size: 14px;
    }
`;

const Container = styled.div`
    margin-top: 19px;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Lato';
    font-style: normal;
    font-size: 11px;
    line-height: 13px;

    p{
        font-weight: 400;
        color: #FFFFFF;
    }

    span{
        font-weight: 700;
        color: #505050;
    }

    @media ${MEDIA_QUERIES.mobile}{
        font-size: 9px;
    }
`;

// import { useState, useEffect } from 'react';
// import styled from "styled-components";
// import ReactTooltip from 'react-tooltip';
// import axios from "axios";
// import { BASE_URL } from "../constants/url";
// import { MEDIA_QUERIES } from "../constants/mediaQueries";

export default function LikeHeart(props) {

//     const { postId } = props;

//     let message;

//     const [liked, setLiked] = useState(false);
//     const [likeCounter, setLikeCounter] = useState(0);
//     const [whoLiked, setWhoLiked] = useState([]);
//     const [tooltipMessage, setTooltipMessage] = useState("");

//     useEffect(() => {
//         const promise = axios.get(`${BASE_URL}/likes/${postId}`);

//         promise.then((res) => {
//             console.log(res.data);
//             setWhoLiked(res.data[1]);
//             setLikeCounter(res.data[0]);
//         });

//         promise.catch((error) => console.log(error.message));
//     }, [liked]);

//     function changeLike() {

//         if (!liked) {
//             const promise = axios.post(`${BASE_URL}/like/${postId}`);

//             promise.then((res) => {
//                 console.log(res.data);
//                 // setLikeCounter(likeCounter + 1);
//                 changeTooltip(whoLiked, setTooltipMessage);
//             });

//             promise.catch((error) => {
//                 console.log(error.message);
//                 setLiked(false);
//             });
//         } else {
//             const promise = axios.delete(`${BASE_URL}/like/${postId}`);

//             promise.then((res) => {
//                 console.log(res.data);
//                 // setLikeCounter(likeCounter - 1);
//                 changeTooltip(whoLiked, setTooltipMessage);
//             });

//             promise.catch((error) => {
//                 console.log(error.message);
//                 setLiked(false);
//             });
//         }

//         setLiked(!liked);

//     }

//     function changeTooltip(whoLiked, setTooltipMessage) {

//         if (liked) {
//             switch (parseInt(likeCounter)) {
//                 case 0:
//                     message = "Ninguém curtiu esse post ainda";
//                     break;

//                 case 1:
//                     message = "Você curtiu esse post"
//                     break;

//                 case 2:
//                     message = `Você e ${whoLiked[0]} curtiram esse post`
//                     break;

//                 case 3:
//                     message = `Você, ${whoLiked[0]} e ${whoLiked[1]} curtiram esse post`
//                     break;

//                 default:
//                     message = `Você, ${whoLiked[0]}, ${whoLiked[1]} e mais ${whoLiked.length - 2} curtiram esse post$`
//                     break;
//             }

//             setTooltipMessage(message);
//         } else {
//             switch (parseInt(likeCounter)) {
//                 case 0:
//                     message = "Ninguém curtiu esse post ainda";
//                     break;

//                 case 1:
//                     message = `${whoLiked[0]} curtiu esse post`
//                     break;

//                 case 2:
//                     message = `${whoLiked[0]} e ${whoLiked[1]} curtiram esse post`
//                     break;

//                 case 3:
//                     message = `${whoLiked[0]}, ${whoLiked[1]} e ${whoLiked[2]} curtiram esse post`
//                     break;
//                 default:
//                     message = `${whoLiked[0]}, ${whoLiked[1]}, ${whoLiked[2]} e mais ${whoLiked.length - 3} curtiram esse post$`
//                     break;
//             }

//             setTooltipMessage(message);
//         }

//     }

//     return (
//         <>
//             {liked ? (
//                 <Container>
//                     <Heart liked={liked}>
//                         <ion-icon data-tip={tooltipMessage} data-for="text" onClick={changeLike} name="heart"></ion-icon>
//                         <ReactTooltip id="text" effect="solid" place="bottom" type="light" />
//                     </Heart>
//                     <p>{likeCounter} {likeCounter === 1 ? "like" : "likes"}</p>
//                 </Container>
//             ) : (
//                 <Container>
//                     <Heart liked={liked}>
//                         <ion-icon data-tip={tooltipMessage} data-for="text" onClick={changeLike} name="heart-outline"></ion-icon>
//                         <ReactTooltip id="text" effect="solid" place="bottom" type="light" />
//                     </Heart>
//                     <p>{likeCounter} {likeCounter === 1 ? "like" : "likes"}</p>
//                 </Container>
//             )}
//         </>
//     )

}

// const Heart = styled.div`
//     font-size: 22px;
//     color: ${props => props.liked ? "#AC0000" : ""};
//     cursor: pointer;

//     @media ${MEDIA_QUERIES.mobile}{
//         font-size: 14px;
//     }
// `;

// const Container = styled.div`
//     margin-top: 19px;

//     display: flex;
//     flex-direction: column;
//     padding-left: 22%;

//     font-family: 'Lato';
//     font-style: normal;
//     font-size: 11px;
//     line-height: 13px;

//     p{
//         font-weight: 400;
//         color: #FFFFFF;

//         padding-top: 5%;
//     }

//     span{
//         font-weight: 700;
//         color: #505050;
//     }

//     @media ${MEDIA_QUERIES.mobile}{
//         font-size: 9px;
//     }
// `;

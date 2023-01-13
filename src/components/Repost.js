import { Link, useNavigate } from "react-router-dom";
import LikeHeart from "./LikeHeart";
import { Description, ImgUser, LinkDescription, PostContainer, PostInfos } from "./Post";
import defaultImage from "../assets/image/default-image.jpg";
import styled from "styled-components";
import {BiRepost} from "react-icons/bi"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import RepostCount from "./RepostCount";
import { ReactTagify } from "react-tagify";
export default function Repost({ postData ,setReloadPosts }){
    const{user} = useContext(UserContext);
    const tagStyle = {
      color: '#FFFFFF',
      fontWeight: 900,
      cursor: 'pointer',
      fontSize: "17px",
      lineHeight: "20px"
    };
    const navigate = useNavigate();
    return (
        <RepostContainer>
            <RepostInfo>    
           <BiRepost/> <p>Re-posted by <span>{parseInt(user.userId) === postData.userShareId? "you" : postData.userShare}</span></p>
            </RepostInfo>
      
        <OriginalPostContainer>
            <figure>
        <ImgUser
          onClick={() => navigate(`/users/${postData.userId}`)}
          src={postData.image}
          alt="User"
        />
        <LikeHeart postId={postData.id} />
        <RepostCount count = {postData.repostCount} postId={postData.id} setReloadPosts={setReloadPosts}/>
      </figure>
      <PostInfos>
        <header>
          <h2 onClick={() => navigate(`/users/${postData.userId}`)}>
            {postData.username}
          </h2>
       
        </header>
        <ReactTagify
            tagStyle={tagStyle}
            tagClicked={(tag) => navigate(`/hashtag/${tag.replace("#","")}`)}>
            <PostDescription>{postData.description}</PostDescription>
          </ReactTagify>
        <LinkDescription onClick={() => window.open(postData.link)}>
          <figcaption>
            <h3>{postData.metadataLink?.title}</h3>
            <Description>{postData.metadataLink?.description}</Description>
            <Link>{postData.link}</Link>
          </figcaption>
          <img
            src={
              !postData.metadataLink?.image
                ? defaultImage
                : postData.metadataLink?.image
            }
            alt="link image"
          />
        </LinkDescription>
      </PostInfos>
        </OriginalPostContainer>  
        </RepostContainer>
    )
}

const RepostContainer = styled.div`
display: flex;
flex-direction:column;
background-color: #1E1E1E;
border-radius: 16px;
  width: 100%;
margin-bottom:16px;
a{
  text-decoration: none;
  
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;

color: #CECECE;
}
`
const OriginalPostContainer=styled(PostContainer)`
margin-bottom:0px;
`

const RepostInfo = styled.div`
display:flex;
align-items:center;
height:33px;
padding-left:15px;
color: #FFFFFF;
    p{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        
        span{
            font-weight: 600;
        }
    }

`

const PostDescription = styled.p`
 color: #b7b7b7;
    width: 100%;
    min-height: 25px;
    font-weight: 400;
    font-size: 17px;
    margin-bottom: 10px;
    line-height: 20px;
    `
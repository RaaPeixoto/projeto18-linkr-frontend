import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import LikeHeart from "./LikeHeart";
import { COLORS } from "../constants/layoutConstants";
import { MEDIA_QUERIES } from "../constants/mediaQueries";

export default function Post({ postData }) {
  const navigate = useNavigate();

  return (
    <PostContainer>
      <figure>
        <ImgUser
          onClick={() => navigate(`/users/${postData.id}`)}
          src={postData.image}
          alt="User"
        />
        <LikeHeart />
      </figure>
      <PostInfos>
        <header>
          <h2 onClick={() => navigate(`/users/${postData.id}`)}>
            {postData.username}
          </h2>
          <div>O O{/* aqui coloca os icones de editar e deletar */}</div>
        </header>
        <p>{postData.description}</p>
        <LinkDescription onClick={() => window.open(postData.link)}>
          <figcaption>
            <h3>{postData.metadataLink?.title}</h3>
            <Description>{postData.metadataLink?.description}</Description>
            <Link>{postData.link}</Link>
          </figcaption>
          <img src={postData.metadataLink?.image} alt="link image" />
        </LinkDescription>
      </PostInfos>
    </PostContainer>
  );
}

const PostContainer = styled.li`
  background-color: #171717;
  width: 100%;
  min-height: 276px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 16px;
  display: flex;
  @media ${MEDIA_QUERIES.mobile} {
    border-radius: 0px;
    width: 100vw;
  }
`;

const ImgUser = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 18px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;

  &:hover{
    opacity: 0.9;
  }
`;

const PostInfos = styled.section`
  width: 100%;
  height: auto;

  header {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  header h2 {
    color: ${COLORS.text};
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
  }
  header h2:hover{
    opacity: 0.9;
  }
  header div {
    width: auto;
  }

  & > p {
    color: #b7b7b7;
    width: 100%;
    min-height: 25px;
    font-weight: 400;
    font-size: 17px;
    margin-bottom: 10px;
    line-height: 20px;
  }
`;

const LinkDescription = styled.figure`
  width: 100%;
  min-height: 155px;
  border-radius: 11px;
  border: 1px solid #4d4d4d;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  figcaption {
    width: 70%;
    padding: 16px;
  }

  h3 {
    color: #cecece;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 3px;
  }

  img {
    width: 30%;
    min-height: 155px;
    object-fit: cover;
    border-radius: 0 11px 11px 0;
  }
`;
const Description = styled.p`
  color: #9b9595;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  margin-bottom: 13px;
`;
const Link = styled.p`
  color: #cecece;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
`;

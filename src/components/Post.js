import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../constants/layoutConstants";
import LikeHeart from "./LikeHeart";

export default function Post() {
  const navigate = useNavigate();

  return (
    <PostContainer>
      <figure>
        <ImgUser
          src="https://imagenscomfrases.com.br/wp-content/uploads/2021/09/frase-engracadas-16.jpg"
          alt="User"
        />
        <LikeHeart/>
      </figure>
      <PostInfos>
        <header>
          <h2 onClick={() => navigate("/users/:id")}>Juvenal Juvêncio</h2>
          <div>O O{/* aqui coloca os icones de editar e deletar */}</div>
        </header>
        <p>
          Muito maneiro esse tutorial de Material UI com React, deem uma olhada!
          <strong>#react</strong> <strong>#material</strong>
        </p>
        <LinkDescription>
          <figcaption>
            <h3>Como aplicar o Material UI em um projeto React</h3>
            <Description>
              Hey! I have moved this tutorial to my personal blog. Same content,
              new location. Sorry about making you click through to another
              page.
            </Description>
            <Link>https://medium.com/@pshrmn/a-simple-react-router</Link>
          </figcaption>
          <img
            src="https://miro.medium.com/max/1200/1*G2QwxPF2TvWXzRUnA4axoA.png"
            alt="link image"
          />
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
`;

const ImgUser = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 18px;
  border-radius: 100%;
  object-fit: cover;
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
  }
  header div {
    width: auto;
  }

  & > p {
    color: #b7b7b7;
    width: 100%;
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

import styled from "styled-components";

import { COLORS, FONTS } from "../constants/layoutConstants";

import CreatePost from "./CreatePost";
import Post from "./Post";

export default function ScreenBackgroundColor() {
  return (
    <BackgroundColorContainer>
      <div>
        <h1>timeline</h1>
        <PostAndTrendingContainer>
          <main>
            <CreatePost />
            <ul>
              <Post />
            </ul>
          </main>
          <Teste></Teste>
          {/* Aqui pode colocar o componente da trending */}
        </PostAndTrendingContainer>
      </div>
    </BackgroundColorContainer>
  );
}

const BackgroundColorContainer = styled.div`
  background-color: ${COLORS.background};
  width: 100vw;
  min-height: 100vh;
  padding-top: 125px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    width: 68%;
    margin-right: 25px;
    margin-bottom: 45px;
    color: ${COLORS.text};
    font-family: ${FONTS.h1};
    font-size: 43px;
  }
`;

const PostAndTrendingContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;

  main {
    width: 45%;
    height: auto;
    margin-right: 25px;
  }
`;

const Teste = styled.div`
  background-color: #171717;
  width: 23%;
  height: 406px;
`;

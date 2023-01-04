import styled from "styled-components";

import { COLORS, FONTS } from "../constants/layoutConstants";

import CreatePost from "./CreatePost";
import Post from "./Post";

export default function ScreenBackgroundColor() {
  return (
    <BackgroundColorContainer>
      <main>
        <h1>timeline</h1>
        <CreatePost />
        <ul>
          <Post />
        </ul>
      </main>

      {/* Aqui pode colocar o componente da trending */}
    </BackgroundColorContainer>
  );
}

const BackgroundColorContainer = styled.div`
  background-color: ${COLORS.background};
  width: 100vw;
  min-height: 100vh;
  padding-top: 125px;

  h1 {
    margin-bottom: 45px;
    color: ${COLORS.text};
    font-family: ${FONTS.h1};
    font-size: 43px;
  }
`;

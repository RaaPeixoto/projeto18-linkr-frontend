import styled from "styled-components";

import { COLORS, FONTS } from "../constants/layoutConstants";

export default function ScreenBackgroundColor(props) {
  console.log(props);
  return <BackgroundColorContainer>{props.children}</BackgroundColorContainer>;
}

const BackgroundColorContainer = styled.div`
  background-color: ${COLORS.background};
  width: 100vw;
  min-height: 100vh;
  padding-top: 125px;
  display: flex;
  justify-content: center;

  & > div {
    width: auto;
    height: auto;
  }

  h1 {
    width: auto;
    margin-bottom: 45px;
    color: ${COLORS.text};
    font-family: ${FONTS.h1};
    font-size: 43px;
  }

  main {
    width: 45vw;
    height: auto;
  }

  div > div {
    width: auto;
    height: auto;
    display: flex;
  }
`;

import styled from "styled-components";
import { COLORS, FONTS } from "../constants/layoutConstants";

export default function Trending() {
  return (
    <TrendingConteiner>
      <h1>trending</h1>
      <Line></Line>
      <h2># javascript</h2>
      <h2># javascript</h2>
      <h2># react</h2>
    </TrendingConteiner>
  );
}

const TrendingConteiner = styled.div`
  width: 23vw;
  height: 31vh;
  background-color: ${COLORS.trending};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25px;
  padding: 9px 0px 12px 0px;
  border-radius: 16px;

  h1 {
    color: ${COLORS.text};
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    padding-left: 16px;
  }

  h2 {
    color: ${COLORS.text};
    font-family: ${FONTS.text};
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    padding-left: 16px;
    margin-bottom: 10px;
  }
`;
const Line = styled.div`
  width: 23vw;
  height: 0px;
  border: 1px solid #484848;
  margin-bottom: 22px;
`;

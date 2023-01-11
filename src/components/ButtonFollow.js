import styled from "styled-components";
import { COLORS } from "../constants/layoutConstants";

export default function ButtonFollow() {
  return <Button>Follow</Button>;
}

const Button = styled.button`
  background: ${COLORS.button};
  color: ${COLORS.text};
  min-width: 55px;
  width: 10vw;
  height: 31px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  border: none;
  border-radius: 5px;
`;

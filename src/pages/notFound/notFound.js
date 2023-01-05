import styled from "styled-components";
import pageNotFound from "../../assets/image/page-not-found.png";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <img src={pageNotFound} alt="page not found" />
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.figure`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

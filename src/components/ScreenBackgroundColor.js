import styled from "styled-components";
import { COLORS, FONTS } from "../constants/layoutConstants";
import { MEDIA_QUERIES } from "../constants/mediaQueries";
import CreatePost from "./CreatePost";
import Trending from "./Trending";
import { useContext } from "react";
import { LogoutContext } from "../contexts/LogoutContext";
export default function ScreenBackgroundColor(props) {
  const { userImage, titlePage, children, showCreatePost, setReloadPosts } =
    props;

  const { openLogoutDiv, setOpenLogoutDiv } = useContext(LogoutContext);
  function closeLogoutDiv() {
    if (openLogoutDiv === true) {
      setOpenLogoutDiv(false);
    }
  }
  return (
    <BackgroundColorContainer onClick={() => closeLogoutDiv()}>
      <div>
        <TitlePage>
          {userImage}
          <h1>{titlePage}</h1>
        </TitlePage>
        <PostAndTrendingContainer>
          <main>
            {showCreatePost === false ? (
              ""
            ) : (
              <CreatePost setReloadPosts={setReloadPosts} />
            )}
            <ul>{children}</ul>
          </main>
          {
            <Trending/>
          }
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
  display: flex;
  justify-content: center;

  & > div {
    width: auto;
    height: auto;
  }
  @media ${MEDIA_QUERIES.mobile} {
    justify-content: flex-start;
  }
`;

const TitlePage = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 45px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 18px;
    border-radius: 100%;
    object-fit: cover;
  }

  h1 {
    width: auto;

    color: ${COLORS.text};
    font-family: ${FONTS.h1};
    font-size: 43px;
  }
`;

const PostAndTrendingContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;

  main {
    width: 45vw;
    height: auto;
  }
`;

import styled from "styled-components";
import { COLORS, FONTS } from "../constants/layoutConstants";
import { MEDIA_QUERIES } from "../constants/mediaQueries";
import CreatePost from "./CreatePost";
import Trending from "./Trending";
import { useContext } from "react";
import { LogoutContext } from "../contexts/LogoutContext";
import ButtonFollow from "./ButtonFollow";

export default function ScreenBackgroundColor(props) {
  const {
    userImage,
    userId,
    titlePage,
    children,
    showCreatePost,
    setReloadPosts,
    showButtonFollow,
  } = props;

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
          <div>
            {userImage ? <img src={userImage} alt="user image" /> : ""}
            <h1>{titlePage}</h1>
          </div>
          {showButtonFollow === true ? <ButtonFollow userId={userId} /> : ""}
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
          <Trending />
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
    padding-top: 150px;

    & > div {
      width: 100vw;
      height: auto;
    }
  }
`;

const TitlePage = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;

  @media ${MEDIA_QUERIES.mobile} {
    padding: 0 30px 0 10px;
  }

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 50px;
    height: 50px;
    margin-left: 15px;
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

  @media ${MEDIA_QUERIES.mobile} {
    main {
      width: 100vw;
    }

    ul{
      width: 100vw;
    }
  }

  main {
    width: 45vw;
    height: auto;
  }
`;

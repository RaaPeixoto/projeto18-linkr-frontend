import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

import LikeHeart from "./LikeHeart";
import CommentIcon from "./CommentIcon";
import Comments from "./Comments";
import { COLORS, FONTS } from "../constants/layoutConstants";
import { BASE_URL } from "../constants/url";
import { MEDIA_QUERIES } from "../constants/mediaQueries";
import pencil from "../assets/image/pencil.png";
import trash from "../assets/image/trash.png";
import defaultImage from "../assets/image/default-image.jpg";
import RepostCount from "./RepostCount";
import { ReactTagify } from "react-tagify";
export default function Post({ postData, image, username, setReloadPosts }) {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [commentCounter, setCommentCounter] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // subtitle.style.color = 'red';
  }
  function closeModal() {
    setIsOpen(false);
  }
  const tagStyle = {
    color: '#FFFFFF',
    fontWeight: 900,
    cursor: 'pointer',
    fontSize: "17px",
    lineHeight: "20px"
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function deletePost() {
    const config = {
      headers: {
        Authorization: `Bearer`,
      },
    };

    axios
      .delete(`${BASE_URL}/post/:id`, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <PostContainer >
        <figure>
          <ImgUser
            onClick={() => navigate(`/users/${postData.userId}`)}
            src={image}
            alt="User"
          />
          <LikeHeart postId={postData.id} />
          <CommentIcon openComment={openComment} setOpenComment={setOpenComment} commentCounter={commentCounter} setCommentCounter={setCommentCounter} postId={postData.id} />
          <RepostCount count={postData.repostCount} postId={postData.id} setReloadPosts={setReloadPosts} />
        </figure>
        <PostInfos>
          <header>
            <h2 onClick={() => navigate(`/users/${postData.userId}`)}>
              {username}
            </h2>
            <div>
              <img src={pencil} alt="pencil"></img>
              <img src={trash} alt="trash" onClick={openModal}></img>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
              >
                <ModalConteiner>
                  <ModalP>Are you sure you want to delete this post?</ModalP>
                  <ModalButton>
                    <button
                      style={{ backgroundColor: "#ffffff", color: "#1877F2" }}
                      onClick={closeModal}
                      type="button"
                    >
                      No, go back
                    </button>
                    <button onClick={deletePost} type="submit">
                      Yes, delete it
                    </button>
                  </ModalButton>
                </ModalConteiner>
              </Modal>
            </div>
          </header>
          <ReactTagify
            tagStyle={tagStyle}
            tagClicked={(tag) => navigate(`/hashtag/${tag.replace("#","")}`)}>
            <PostDescription>{postData.description}</PostDescription>
          </ReactTagify>
          <LinkDescription onClick={() => window.open(postData.link)}>
            <figcaption>
              <h3>{postData.metadataLink?.title}</h3>
              <Description>{postData.metadataLink?.description}</Description>
              <Link>{postData.link}</Link>
            </figcaption>
            <img
              src={
                !postData.metadataLink?.image
                  ? defaultImage
                  : postData.metadataLink?.image
              }
              alt="link image"
            />
          </LinkDescription>
        </PostInfos>
      </PostContainer>
      {openComment ?
        <Comments
          postId={postData.id}
          commentCounter={commentCounter}
          setCommentCounter={setCommentCounter}
        />
        : ""}
    </>
  );
}

export const PostContainer = styled.li`
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

export const ImgUser = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 18px;
  border-radius: 100%;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const PostInfos = styled.section`
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
  header h2:hover {
    opacity: 0.9;
  }
  header div {
    width: auto;
  }

  header img {
    margin-right: 12px;
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

export const LinkDescription = styled.figure`
  width: 100%;
  min-height: 160px;
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
    min-height: 18px;
    max-height: 38px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 3px;
    overflow: hidden;
  }

  img {
    width: 30%;
    min-height: 160px;
    object-fit: cover;
    border-radius: 0 11px 11px 0;
  }
`;
export const Description = styled.p`
  color: #9b9595;
  min-height: 13px;
  max-height: 50px;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  margin-bottom: 13px;
  overflow: hidden;
  word-break: break-all;
`;
const Link = styled.p`
  color: #cecece;
  max-height: 26px;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  overflow: hidden;
  word-break: break-all;
`;

export const ModalConteiner = styled.div`
  width: 597px;
  height: 262px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
  border-radius: 50px;
  font-family: "Roboto";
`;
export const ModalP = styled.p`
  width: 350px;
  height: 82px;
  font-weight: 700;
  font-size: 34px;
  font-family: ${FONTS.text};
  line-height: 41px;
  text-align: center;
  color: #ffffff;
  margin: 33px 0px 47px 0px;
`;

export const ModalButton = styled.div`
  width: 248px;
  height: 37px;
  display: flex;
  justify-content: space-evenly;

  button {
    width: 95px;
    height: 52px;
    background: #1877f2;
    border-radius: 8px;
    color: #ffffff;
    margin-right: 27px;
  }
`;
const PostDescription = styled.p`
 color: #b7b7b7;
    width: 100%;
    min-height: 25px;
    font-weight: 400;
    font-size: 17px;
    margin-bottom: 10px;
    line-height: 20px;
    `
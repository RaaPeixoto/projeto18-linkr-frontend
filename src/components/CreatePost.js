import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

import { COLORS } from "../constants/layoutConstants";
import { BASE_URL } from "../constants/url";
import { UserContext } from "../contexts/UserContext";
import { MEDIA_QUERIES } from "../constants/mediaQueries";

export default function CreatePost() {
  const { user } = useContext(UserContext);
  console.log("user", user);

  const { config: token } = useContext(AuthContext);
  const config = { header: { Autorization: `Bearer ${token}` } };

  const [postData, setPostData] = useState({ link: "", description: "" });
  const [isPublishingPost, setIsPublishingPost] = useState(false);

  function updatePostData(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  }

  function publishPost(event) {
    event.preventDefault();
    setIsPublishingPost(true);

    axios
      .post(`${BASE_URL}/post`, postData, config)
      .then((res) => {
        setIsPublishingPost(true);
      })
      .catch((error) => {
        setIsPublishingPost(false);
      });
  }

  return (
    <CreatePostContainer>
      <img src={user.image} alt="User" />

      <Form onSubmit={publishPost} isPublishingPost={isPublishingPost}>
        <header>What are you going to share today?</header>

        <input
          type="url"
          placeholder="Link"
          name="link"
          value={postData.link}
          onChange={updatePostData}
          disabled={isPublishingPost}
          required
        />
        <textarea
          placeholder="Description"
          name="description"
          value={postData.description}
          onChange={updatePostData}
          disabled={isPublishingPost}
        />
        <button type="submit" disabled={isPublishingPost}>
          {isPublishingPost ? "Publishing..." : "Publish"}
        </button>
      </Form>
    </CreatePostContainer>
  );
}

const CreatePostContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 209px;
  margin-bottom: 29px;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  display: flex;

  img {
    width: 50px;
    height: 50px;
    margin-right: 18px;
    border-radius: 100%;
    object-fit: cover;
  }
  @media ${MEDIA_QUERIES.mobile} {
    border-radius: 0px;
    width: 100vw;
  }
`;

const Form = styled.form`
  text-align: end;
  width: 100%;

  header {
    color: #707070;
    text-align: start;
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 20px;
  }

  input {
    background-color: #efefef;
    width: 100%;
    height: 30px;
    font-size: 15px;
    font-weight: 300;
    padding-left: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    border: none;
    outline: none;
    opacity: ${(props) => (props.isPublishingPost ? 0.7 : 1)};
  }

  textarea {
    background-color: #efefef;
    resize: none;
    width: 100%;
    height: 60px;
    padding-left: 10px;
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: 300;
    border-radius: 5px;
    border: none;
    outline: none;
    opacity: ${(props) => (props.isPublishingPost ? 0.7 : 1)};
  }

  button {
    color: ${COLORS.text};
    background-color: ${COLORS.button};
    width: 25%;
    height: 31px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    opacity: ${(props) => (props.isPublishingPost ? 0.7 : 1)};
    cursor: pointer;
  }
`;

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Post from "../../components/Post";
import Repost from "../../components/Repost";
import ScreenBackgroundColor from "../../components/ScreenBackgroundColor";
import { BASE_URL } from "../../constants/url";
import { AuthContext } from "../../contexts/AuthContext";

export default function Timeline() {
  const navigate = useNavigate();

  const { config: token } = useContext(AuthContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const [listPosts, setListPosts] = useState(null);
  const [isFollowingSomeone, setIsFollowingSomeone] = useState(null);
  const [reloadPosts, setReloadPosts] = useState({});
  console.log(isFollowingSomeone);

  useEffect(() => {
    buscarPosts();
    fetchFollowing();
  }, [reloadPosts]);

  function buscarPosts() {
    axios
      .get(`${BASE_URL}/posts`, config)
      .then((res) => {
        setListPosts(res.data);
        
      })
      .catch((error) => {
        console.log(error);

        if (error.response?.status === 401) {
          localStorage.clear();
          navigate("/");
          return;
        }

        swal(
          "An error occured while trying to fetch the posts, please refresh the page"
        );
      });
  }

  function fetchFollowing() {
    axios
      .get(`${BASE_URL}/followers`, config)
      .then((res) => {
        console.log(res.data);

        if (res.data.length === 0) setIsFollowingSomeone(false);
        else setIsFollowingSomeone(true);
      })
      .catch((error) => {
        console.log(error.response.data.message);

        if (error.response?.status === 401) {
          localStorage.clear();
          navigate("/");
          return;
        }

        swal("Server error, please try again later");
      });
  }

  function renderPosts(postData) {
    return postData.repost === true ? (
      <Repost
        key={`${postData.id}-${postData.repostId}`}
        postData={postData}
        setReloadPosts={setReloadPosts}
      />
    ) : (
      <Post
        key={postData.id}
        postData={postData}
        image={postData.image}
        username={postData.username}
        setReloadPosts={setReloadPosts}
      />
    );
  }

  if (!listPosts) {
    return (
      <ScreenBackgroundColor
        titlePage="timeline"
        setReloadPosts={setReloadPosts}
      >
        Loading...
      </ScreenBackgroundColor>
    );
  }

  return (

    <ScreenBackgroundColor titlePage="timeline" setReloadPosts={setReloadPosts} reloadPosts= {reloadPosts}>
      {!listPosts
        ? "Loading..."
        : listPosts.length === 0
        ? "There are no posts yet"
        : listPosts.map((postData) =>
            postData.repost === true ? (
              <Repost
                key={`${postData.id}-${postData.repostId}`}
                postData={postData}
                setReloadPosts={setReloadPosts}
              />
            ) : (
              <Post
            
                key={postData.id}
                postData={postData}
                image={postData.image}
                username={postData.username}
                setReloadPosts={setReloadPosts}
              />
            )
          )}

    </ScreenBackgroundColor>
  );
}

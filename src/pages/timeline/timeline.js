import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import Post from "../../components/Post";
import ScreenBackgroundColor from "../../components/ScreenBackgroundColor";
import { BASE_URL } from "../../constants/url";
import { AuthContext } from "../../contexts/AuthContext";

export default function Timeline() {
  const navigate = useNavigate();

  const { config: token } = useContext(AuthContext);
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const [listPosts, setListPosts] = useState(null);
  const [reloadPosts, setReloadPosts] = useState({});

  useEffect(() => {
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
  }, [reloadPosts]);

  return (
    <ScreenBackgroundColor titlePage="timeline" setReloadPosts={setReloadPosts}>
      {!listPosts
        ? "Loading..."
        : listPosts.length === 0
        ? "There are no posts yet"
        : listPosts.map((postData) => (
            <Post
              key={postData.id}
              postData={postData}
              image={postData.image}
              username={postData.username}
            />
          ))}
    </ScreenBackgroundColor>
  );
}

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import Post from "../../components/Post";
import ScreenBackgroundColor from "../../components/ScreenBackgroundColor";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import Loading from "../../components/LoadingScreen";

export default function UserPage() {
  const navigate = useNavigate();

  const { username: myUsername } = useContext(UserContext).user;
  const { userId: myUserId } = useContext(UserContext).user;
  const { userId } = useParams();

  const [showCreatePost, setShowCreatePost] = useState(false);
  const [userPosts, setUserPosts] = useState(null);
  const [username, setUsername] = useState(undefined);
  const [image, setImage] = useState(undefined);

  const { config } = useContext(AuthContext);

  const auth = {
    headers: { Authorization: `Bearer ${config}` },
  };

  useEffect(() => {
    const promise = axios.get(`${BASE_URL}/users/${userId}`, auth);

    promise.then((res) => {
      setUserPosts(res.data[1]);
      setImage(res.data[0].image);
      setUsername(res.data[0].username);
    });

    promise.catch((error) => {
      console.log(error.message);
      setUserPosts([]);

      if (error.response?.status === 401) {
        localStorage.clear();
        navigate("/");
        return;
      }
    });
  }, []);

  if (!userPosts) return <Loading />;

  return (
    <ScreenBackgroundColor
      userImage={image}
      userId={userId}
      titlePage={username + "'s posts"}
      showCreatePost={showCreatePost}
      showButtonFollow={userId !== myUserId ? true : false}
    >
      {userPosts.length === 0
        ? `${
            username === myUsername ? "You" : username
          } doesn't have any posts yet`
        : userPosts.map((info, index) => (
            <Post
              key={index}
              image={image}
              postData={info}
              username={username}
            />
          ))}
    </ScreenBackgroundColor>
  );
}

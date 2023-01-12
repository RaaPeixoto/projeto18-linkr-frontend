import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import Post from "../../components/Post";
import ScreenBackgroundColor from "../../components/ScreenBackgroundColor";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import Loading from "../../components/LoadingScreen";

export default function UserPage() {
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
    });
  }, []);

  if (!userPosts) return <Loading />;

  return (
    <ScreenBackgroundColor
      userImage={image}
      userId={userPosts[0]?.userId}
      titlePage={username + "'s posts"}
      showCreatePost={showCreatePost}
      showButtonFollow={userId !== myUserId ? true : false}
    >
      {userPosts.map((info, index) => (
        <Post key={index} image={image} postData={info} username={username} />
      ))}
    </ScreenBackgroundColor>
  );
}

import Post from "../../components/Post";
import ScreenBackgroundColor from "../../components/ScreenBackgroundColor";


export default function Hashtag() {
  return (
    <ScreenBackgroundColor title="timeline" showCreatePost={false}>
      <Post />
      <Post />
      <Post />
    </ScreenBackgroundColor>
  );
}

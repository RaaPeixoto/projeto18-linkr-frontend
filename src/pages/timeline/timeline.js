import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";
import ScreenBackgroundColor from "../../components/ScreenBackgroundColor";

export default function Timeline() {
  return (
    <ScreenBackgroundColor>
      <div>
        <h1>timeline</h1>
        <div>
          <main>
            <CreatePost />
            <ul>
              <Post />
            </ul>
          </main>
          {/* 
          Aqui pode colocar o componente da trending 
          para dar certo, coloque na estilização as seguintes propriedades:
          {
            width: 23vw;
            margin-left: 25px;
          }
          */}
        </div>
      </div>
    </ScreenBackgroundColor>
  );
}

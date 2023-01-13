import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";

import Navbar from "./components/Navbar";
import Hashtag from "./pages/HashtagPage/Hashtag";
import NotFound from "./pages/notFound/notFound";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Timeline from "./pages/timeline/timeline";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />

        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/hashtag/:hashtag" element={<Hashtag />} />
          <Route path="/users/:userId" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



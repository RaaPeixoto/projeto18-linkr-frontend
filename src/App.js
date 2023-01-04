import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";

import Navbar from "./components/Navbar";
import ScreenBackgroundColor from "./components/ScreenBackgroundColor";
import NotFound from "./pages/notFound/notFound";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Timeline from "./pages/timeline/timeline";

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
          <Route path="/timeline" element={<ScreenBackgroundColor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

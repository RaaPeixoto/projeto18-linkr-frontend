import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";

import Navbar from "./components/navbar";
import NotFound from "./pages/notFound";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

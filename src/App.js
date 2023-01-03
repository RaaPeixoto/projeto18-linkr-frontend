import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"

import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
    <Route path="/" element={<SignInPage/> }/>
    <Route path="/sign-up" element={<SignUpPage/> }/>
    </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;

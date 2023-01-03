import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"

import SignInPage from "./pages/SignInPage/SignInPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
    <Route path="/" element={<SignInPage/> }/>
    </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;

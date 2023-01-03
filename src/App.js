import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./assets/GlobalStyle"
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
    <Route path="/" element={{/* <LoginPage/> */}}/>
    </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;

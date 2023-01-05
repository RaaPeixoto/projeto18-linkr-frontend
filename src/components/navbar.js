import styled from "styled-components";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

import { COLORS, FONTS } from "../constants/layoutConstants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const route = useLocation().pathname;
  let navigate = useNavigate();
  const [openLogoutDiv, setOpenLogoutDiv] = useState(false);

  if (route === "/" || route === "/sign-up") return;
  function logout(e) {

    localStorage.clear();
    navigate("/")
  }
  function closeLogoutDiv() {
    if (openLogoutDiv === true) {
      setOpenLogoutDiv(false)
    }

  }
  return (
    <NavbarContainer onClick={() => closeLogoutDiv()}>
      <Link to="/timeline">linkr</Link>
      <input type="search" placeholder="Search for people" />

      <figure>
        {openLogoutDiv ? <CgChevronUp /> : <CgChevronDown onClick={() => setOpenLogoutDiv(true)} />}

        <img
          src="https://imagenscomfrases.com.br/wp-content/uploads/2021/09/frase-engracadas-16.jpg"
          alt="Usuário"
        />
      </figure>
      {openLogoutDiv ?
        <Logout onClick={(e) => logout(e)} >Logout</Logout>
        :
        <></>
      }
    </NavbarContainer>
  );
}

const NavbarContainer = styled.header`
  background-color: ${COLORS.navbar};
  width: 100vw;
  height: 72px;
  padding: 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  a {
    color: ${COLORS.text};
    text-decoration: none;
    font-size: 49px;
    font-family: ${FONTS.logo};
  }

  input {
    background-color: ${COLORS.input};
    width: 40%;
    height: 45px;
    padding-left: 10px;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  figure {
    color: #fff;
    display: flex;
    align-items: center;
  }
  img {
    width: 53px;
    height: 53px;
    margin-left: 5px;
    border-radius: 100%;
    object-fit: cover;
  }
`;
const Logout = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:72px;
right:0px;
width: 150px;
height: 47px;
background: #171717;
border-radius: 0px 0px 0px 20px;
font-family: ${FONTS.text};
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
letter-spacing: 0.05em;
color: ${COLORS.text};
cursor: pointer;
`

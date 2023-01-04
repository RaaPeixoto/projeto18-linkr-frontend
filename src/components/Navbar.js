import styled from "styled-components";
import { CgChevronDown } from "react-icons/cg";

import { COLORS, FONTS } from "../constants/layoutConstants";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const route = useLocation().pathname;

  if (route === "/" || route === "/sign-up") return;

  return (
    <NavbarContainer>
      <Link to="/timeline">linkr</Link>
      <input type="search" placeholder="Search for people" />
      <figure>
        <CgChevronDown />
        <img
          src="https://imagenscomfrases.com.br/wp-content/uploads/2021/09/frase-engracadas-16.jpg"
          alt="User"
        />
      </figure>
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
    font-weight: 300;
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

import styled from "styled-components";
import { COLORS, FONTS } from "../constants/layoutConstants";
import { MEDIA_QUERIES } from "../constants/mediaQueries";

export default function LogoAndSloganContainer(){
    return(
        <LogoContainer>
        <Logo> linkr</Logo>
        <h1>save, share and discover
          the best links on the web</h1>
      </LogoContainer>
 
    )
}
const LogoContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
  padding:0 144px 0 144px; 
background-color:${COLORS.navbar};
width:60%;
@media ${MEDIA_QUERIES.mobile}
  {
    width:100%;
    align-items:center;
    padding:0 ; 
}

h1{

max-width:442px;

  font-family: ${FONTS.h1};
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 64px;
color: ${COLORS.text};
@media ${MEDIA_QUERIES.mobile}
  {
    line-height: 34px;
    max-width:237px;
    font-size: 23px;
    margin-bottom:27px;
}

}
`
const Logo = styled.p`
font-family: ${FONTS.logo};
font-style: normal;
font-weight: 700;
font-size: 106px;
line-height: 117px;
letter-spacing: 0.05em;

color: ${COLORS.text};
 @media ${MEDIA_QUERIES.mobile}{
font-size: 76px;
line-height: 84px;
}
`
import styled from "styled-components";
import { COLORS,FONTS} from "../constants/layoutConstants";

export default function AuthForm(props) {
  return (
  <FormContainer>{props.children}</FormContainer>
  )
}

const FormContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
form{
  display:flex;
flex-direction:column;
}
input{
  padding-left:17px;
  margin-bottom:13px;
    width: 429px;
    height: 65px;
    background: ${COLORS.input};
    border-radius: 6px;
    ::placeholder{
      font-family: ${FONTS.input};
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;

    color: ${COLORS.placeholder};
    }
}
button{
    width: 429px;
    height: 65px;
    left: 956px;
    top: 473px;
    background: ${COLORS.button};
    border-radius: 6px;
    font-family: ${FONTS.button};
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 40px;
color: ${COLORS.text};
}
`
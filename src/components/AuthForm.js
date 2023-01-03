import styled from "styled-components";
import { COLORS, FONTS} from "../constants/layoutConstants";
import { MEDIA_QUERIES } from "../constants/mediaQueries";

export default function AuthForm(props) {
  return (
  <FormContainer>{props.children}</FormContainer>
  )
}

const FormContainer = styled.div`
width:40%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media ${MEDIA_QUERIES.mobile}
  {
    padding-top: 40px;
    width:100%;
   
}
form{
  width:100%;
  display:flex;
flex-direction:column;
align-items:center;
}
input{
  padding-left:17px;
  margin-bottom:13px;
    width: 80%;
    max-width:429px;
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

    @media ${MEDIA_QUERIES.mobile}
  {
    width: 330px;
  
}
}
button{
    margin-bottom:22px;
    width: 80%;
    max-width:429px;
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
    :disabled{
      background: ${COLORS.disabledButton};
    }
    @media ${MEDIA_QUERIES.mobile}{
    width: 330px;
   
}


}
p{
  font-family: ${FONTS.text};
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
text-decoration-line: underline;
color:${COLORS.text};
}
`
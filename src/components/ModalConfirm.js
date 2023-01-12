import styled from "styled-components"
import { MEDIA_QUERIES } from "../constants/mediaQueries"
export default function ModalConfirm(props){

return (
    
    <ModalContainer>
     {props.children}
    </ModalContainer>
)
}

const ModalContainer = styled.div`
top:0;
bottom:0;
left:0;
right:0;
position:fixed;
min-width:100vw;
min-height:100vh;
z-index:10;
background: rgba(255, 255, 255, 0.9);
display:flex;
align-items:center;
justify-content:center;
section{
    display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width: 50%;
min-height: 210px;
background: #333333;
border-radius: 20px;
h1{
    width:50%;
    font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 29px;
line-height: 35px;
text-align: center;
color: #FFFFFF;
margin-bottom:25px;
@media ${MEDIA_QUERIES.mobile}
  {
    width:70%;
    font-size:25px;
    line-height: 25px;
}
}
div{
    display:flex;
    justify-content:center;
    @media ${MEDIA_QUERIES.mobile}
  {
    flex-direction:column;
    align-items:center;
}
}
}
button{
border-radius: 5px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
width: 134px;
height: 37px;
    :first-child{
        background: #FFFFFF;
        color: #1877F2;
            }
    :last-child{
        background: #1877F2;
        color: #FFFFFF;
    }


}
`



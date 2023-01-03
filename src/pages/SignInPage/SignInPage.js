import styled from "styled-components";
import AuthForm from "../../components/AuthForm";
import { COLORS, FONTS } from "../../constants/layoutConstants";
import axios from "axios";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import swal from 'sweetalert';
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import { MEDIA_QUERIES } from "../../constants/mediaQueries";
export default function SignInPage() {

    let navigate = useNavigate();
    const {setConfig} = useContext(AuthContext);
      const {setUser} = useContext(UserContext);
    const [loading,setLoading] = useState (false)
    const [form, setForm] = useState({
      email: "",
      password: "",
    });
  
    function handleForm(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
   function login(e) {
      e.preventDefault();
      axios.post(`${BASE_URL}/signin`,form)
      .then(res=>{
        setConfig (res.data.token)
        setUser(res.data) 
              localStorage.setItem("token",res.data.token)
              localStorage.setItem("userName",res.data.userName)
              localStorage.setItem("userImage",res.data.type)
           navigate("/") 
  
      })
      .catch(err => {
        console.log(err)
        swal("Fail!", (err.message));
          setLoading(false)
      })
     setLoading(true)
    }
  return (
    <PageContainer>
      <LogoContainer>
        <Logo> linkr</Logo>
        <h1>save, share and discover
          the best links on the web</h1>
      </LogoContainer>
 
    <AuthForm>
    
      <form onSubmit={login}>
                <input 
            type = "email"
             name ="email" 
             value ={form.email}
             onChange={handleForm}
             placeholder="e-mail"
             required
             disabled = {loading}
            />
            <input 
            name ="password"
            value ={form.password}
            onChange={handleForm}
            type="password"
            required
            placeholder="password"
            disabled = {loading}
            />
               
                    <button type="submit" disabled = {loading}> {loading? "Carregando...":"Log In"}</button> 
                  
            
      </form>
    </AuthForm>
     
    </PageContainer>
  );
}

const PageContainer = styled.div`
display:flex;
background-color:${COLORS.background};
min-height:100vh;
width:100vw;
@media ${MEDIA_QUERIES.mobile}
  {
    flex-direction:column;
}
`
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

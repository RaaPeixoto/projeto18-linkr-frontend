import styled from "styled-components";
import AuthForm from "../../components/AuthForm";
import { COLORS} from "../../constants/layoutConstants";
import axios from "axios";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import swal from 'sweetalert';
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import { MEDIA_QUERIES } from "../../constants/mediaQueries";
import LogoAndSloganContainer from "../../components/LogoAndSloganContainer";
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
              localStorage.setItem("image",res.data.image)
           navigate("/timeline") 
  
      })
      .catch(err => {
        console.log(err)
        swal("Fail!", `${err.message}: ${err.response.data}`);
          setLoading(false)
      })
     setLoading(true)
    }
  return (
    <PageContainer>
   <LogoAndSloganContainer/>
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
      <p onClick={()=> {navigate("/sign-up")}}>First time? Create an account!</p>
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


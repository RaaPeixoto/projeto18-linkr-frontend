import styled from "styled-components";
import AuthForm from "../../components/AuthForm";
import { COLORS} from "../../constants/layoutConstants";
import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import swal from 'sweetalert';
import { MEDIA_QUERIES } from "../../constants/mediaQueries";
import LogoAndSloganContainer from "../../components/LogoAndSloganContainer";
export default function SignUpPage() {

    let navigate = useNavigate();
    const [loading,setLoading] = useState (false)
    const [form, setForm] = useState({
      email: "",
      password: "",
      username:"",
      pictureUrl:""
    });
  
    function handleForm(e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
    function signUp(e) {
        e.preventDefault();
        axios.post(`${BASE_URL}/signup`,form)
        .then(()=>{
          swal("Sucess!", "Registered successfully!", "success");
             navigate("/") 
    
        })
        .catch(err => {
            console.log(err)
            swal("Fail!", (err.response.data));
            
            setLoading(false)
        })
       setLoading(true)
      }
  return (
    <PageContainer>
   <LogoAndSloganContainer/>
    <AuthForm>
    
      <form onSubmit={signUp}>
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
             <input 
            name ="username"
            value ={form.username}
            onChange={handleForm}
            type="text"
            required
            placeholder="username"
            disabled = {loading}
            />
            <input 
            name ="pictureUrl"
            value ={form.pictureUrl}
            onChange={handleForm}
            type="url"
            required
            placeholder="picture url"
            disabled = {loading}
            />
               
                    <button type="submit" disabled = {loading}> {loading? "Carregando...":"Sign Up"}</button> 
                  
            
      </form>
      <p onClick={()=> {navigate("/")}}>Switch back to log in!</p>
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


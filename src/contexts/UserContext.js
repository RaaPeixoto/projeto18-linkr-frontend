import { createContext, useState} from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {

    const [user,setUser] = useState ({username:localStorage.getItem("username"),image:localStorage.getItem("image"),userId:localStorage.getItem("userId")})

    
    return(
        <UserContext.Provider value = {{user,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
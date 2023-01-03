import { createContext, useState} from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {

    const [user,setUser] = useState ({userName:localStorage.getItem("userName"),userImage:localStorage.getItem("userImage")})

    
    return(
        <UserContext.Provider value = {{user,setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
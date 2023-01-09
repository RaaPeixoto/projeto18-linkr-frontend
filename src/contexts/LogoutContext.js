import { createContext, useState} from "react";

export const LogoutContext = createContext({});

export const LogoutProvider = (props) => {

    const [openLogoutDiv, setOpenLogoutDiv] = useState(false);

    
    return(
        <LogoutContext.Provider value = {{openLogoutDiv, setOpenLogoutDiv}}>
            {props.children}
        </LogoutContext.Provider>
    )
}
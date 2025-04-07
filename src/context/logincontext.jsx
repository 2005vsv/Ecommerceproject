import { createContext,useContext,useReducer } from "react";
import {loginreducer} from "../reducers/loginreducer";
const Logincontext=createContext();
const Loginprovider=({children})=>{
    const initialstate={
        email:'',
        password:'',
        token:{access_token:localStorage.getItem('token') || '',refresh_token:''}
        
    }
    const [{email,password,token},logindispatch]=useReducer(loginreducer,initialstate);
    return(
        <Logincontext.Provider value={{email,password,token,logindispatch}}>
            {children}
        </Logincontext.Provider>
    )

}
const uselogin=()=>useContext(Logincontext);
export {Loginprovider,uselogin}
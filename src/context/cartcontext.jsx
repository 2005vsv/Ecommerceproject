import { createContext,useContext,useReducer } from "react";
import {cartreducer}  from "../reducers/cartreducer";
const Cartcontext=createContext();
const Cartprovider=({children})=>{
    const initialstate={
        cart:[],
        wishlist:[]
        
    }
    const [{cart,wishlist},cartdispatch]=useReducer(cartreducer,initialstate);
    return(
        <Cartcontext.Provider value={{cart,cartdispatch,wishlist}}>
            {children}

        </Cartcontext.Provider>
    )
}
const usecart=()=>useContext(Cartcontext);
export {Cartprovider,usecart}
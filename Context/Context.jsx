import { createContext, useState } from "react";

export const myContext= createContext();
const ContextProvider=({children})=>{
    const [cartData,setCartdata]= useState([])
    const [product, setProduct]=useState([])
    const [username ,setUsername]= useState('')
    const [password,setPassword]=useState('')
    const [token,setToken]=useState('')
    return <myContext.Provider value={{cartData,setCartdata,product,setProduct,username,setUsername,password,setPassword,token,setToken}}>
        {children}
    </myContext.Provider>

}


export default ContextProvider;
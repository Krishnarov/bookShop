import React, { createContext, useContext, useState } from 'react'
import { json } from 'react-router-dom';

export const Authcontext=createContext();
export default function Authprovider({children}) {
    const initalauthuser =localStorage.getItem('User');
    const [authuser , setauthuser]=useState(
        initalauthuser? JSON.parse(initalauthuser):undefined
    )
    return(
        <Authcontext.Provider value={[authuser,setauthuser]}>
            {children}
        </Authcontext.Provider>
    )
 
}
export const useauth=()=>useContext(Authcontext);
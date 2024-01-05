import React, { useEffect } from 'react';
import { useContext } from 'react';
import { myContext } from '../../Context/Context';


function Token() {
    const { username, password, setToken } = useContext(myContext);

   
   useEffect(()=>{
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username,
          password,
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then(({token})=>setToken(token))

   },[username,password]) 

        // fetchData();
   

    // Make sure to return some JSX if needed
    
}

export default Token;

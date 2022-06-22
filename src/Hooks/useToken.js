import React, { useEffect } from 'react';
import { useState } from 'react';

const useToken = user => {
    const [token,setToken] = useState('');
    useEffect(()=>{
console.log('user inside',user);

const email =user?.user?.email;
const currentUser = {email:email};

if(email){
fetch(`https://safe-earth-55170.herokuapp.com/user/${email}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(currentUser)
})
.then(res =>res.json())
.then(data=>{
    console.log('data inside useToken',data);
})

}
    },[user]);

    return [token];
};

export default useToken;
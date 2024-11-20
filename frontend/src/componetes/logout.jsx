import React from 'react'
import { useauth } from '../context/Authprovider';
import toast from 'react-hot-toast';

function Logout() {
const [authuser ,setauthuser]=useauth();
const heandllogout=()=>{
try {
    setauthuser({
        ...authuser,
        user:null,
    })
    localStorage.removeItem('User');
    toast.success('logout');
    setTimeout(()=>{

        window.location.reload();
    },2000)
} catch (error) {
    toast.error('Error :-'+error.message)
}
}

  return (
    <div>
      <button className='bg-red-600 text-white px-3 py-2 rounded-md' onClick={heandllogout}>Logout</button>
    </div>
  )
}

export default Logout;

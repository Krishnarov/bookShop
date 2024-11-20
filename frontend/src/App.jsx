import React from 'react'
import Home from './Home/home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Course from './course/course';
import Signup from './componetes/signup';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2'
import { useauth } from './context/Authprovider';

function App() {
  const [authuser,setauthuser]=useauth();
  console.log(authuser);
  
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='course/' element={authuser?<Course />:<Navigate to='/signup'/>}/>
        <Route path='signup/' element={<Signup />}/>
      </Routes>
      <Toaster />
    </div>
    </>
  )
}

export default App;
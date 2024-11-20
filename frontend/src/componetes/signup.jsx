import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./login";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const [fullname, setfullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location=useLocation();
  const from=location.state?.from?.pathname || '/';
  const navigate=useNavigate()
  const submitData = async (i) => {
    i.preventDefault();
    const data = { fullname, mobile, email, password };
    // console.log(data.email);
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
    };


      try {
        const res=await axios.post('http://localhost:4001/user/signup',userinfo);
        localStorage.setItem('User',JSON.stringify(res.data.user));
        if(res.status===201){
          // alert('signup successfull ')
          toast.success('signup Successfully created!');
          navigate(from,{replace:true});
          window.location.reload();
        }
        
        
      } catch (error) {
        if(error.response){

          toast.error('error : '+error.response.data.message);


        }else{
          toast.error('Error: Something went wrong. Please try again.');
        }
      }

  };

  return (
    <>
      <div className=" flex justify-center items-center h-screen dark:bg-slate-700 dark:text-white">
        <div className="modal-box dark:bg-slate-900">
          <form onSubmit={submitData}>
            {/* if there is a button in for, it will close the modal */}
            <Link
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              to="/"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Sign Up</h3>

            <div className="mt-6 space-y-3">
              <div>
                <span>Name</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 dark:text-black"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    value={fullname}
                    name="fullname"
                    onChange={(n) => setfullname(n.target.value)}
                    className="grow dark:text-black"
                    placeholder="Enter your full Name"
                  />
                </label>
              </div>
              <br />
              <div>
                <span>Mobile No</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 dark:text-black"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <input
                    type="Number"
                    name="mobile"
                    value={mobile}
                    onChange={(m) => setMobile(m.target.value)}
                    className="grow dark:text-black"
                    placeholder="10 digt mobile no"
                  />
                </label>
              </div>
              <br />
              <div>
                <span>Email</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 dark:text-black"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="grow dark:text-black"
                    placeholder="Enter your Email"
                  />
                </label>
              </div>
              <br />
              <div>
                <span>Password</span>
                <br />
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 dark:text-black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(p) => setPassword(p.target.value)}
                    className="grow dark:text-black"
                    placeholder="Enter your Password"
                  />
                </label>
              </div>
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 px-4 py-2 rounded-md text-white hover:bg-pink-700 duration-200"
                >
                  SignUp
                </button>
                <div>
                  I have an account
                  <button
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

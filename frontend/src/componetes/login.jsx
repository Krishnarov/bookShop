import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitData = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const data = { email, password };
    console.log(data);
    // You can add your login logic here (e.g., API call)
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:4001/user/login",
        userinfo
      );
      // console.log('login res data ;'+res);
      // console.log(JSON.stringify(res.data));

      if (res.data) {
        document.getElementById("my_modal_3")?.close()
        Swal.fire({
          title: "Log in",
          text: "You clicked the button!",
          icon: "success",
        });
        
        localStorage.setItem('User',JSON.stringify(res.data.user))
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        // alert('login successfull')
      } else {
        alert(res.status);
      }
    } catch (error) {
      // alert(error.response.data.message);
      // console.log();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900">
          <form onSubmit={submitData}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3")?.close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            <div className="mt-6 space-y-3">
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
                    type="email" // Changed type to "email"
                    name="email"
                    value={email} // Changed from SetEmail to email
                    onChange={(e) => setEmail(e.target.value)} // Added onChange handler
                    className="grow dark:text-black"
                    placeholder="Email"
                    required
                  />
                </label>
              </div>
              <br />
              <div className="space-y-2">
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
                    className="grow dark:text-black"
                    name="password"
                    value={password} // Changed from SetPssword to password
                    onChange={(e) => setPassword(e.target.value)} // Added onChange handler
                    placeholder="Password"
                    required
                  />
                </label>
              </div>
              <div className="flex justify-around mt-4">
                <button
                  type="submit"

                  className="bg-pink-500 px-4 py-2 rounded-md text-white hover:bg-pink-700 duration-200"
                >
                  Login
                </button>
                <p>
                  create an account{" "}
                  <Link
                    to="/signup"
                    className="text-blue-500 underline cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

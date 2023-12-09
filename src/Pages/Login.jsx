import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoFacebook} from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import loginR from "../assets/loginR.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [logInError, setLogInError] = useState("");
  const {user, signIn, signInWithGoogle}= useContext(AuthContext)
  const navigate = useNavigate()
  console.log("user issss:", user)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
      const password = form.password.value

      signIn(email, password)
        .then(() => {
          e.target.reset()
          navigate("/")
          toast("Log in Successfully!")
        })
      .catch(()=>{
          setLogInError("Your credential doesn't match with our records");
      })  
  }
  
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/")
          toast("Log in Successfully!");
      })
      .catch(error => {
        setLogInError(error.message)
    })
  }

  return (
    <div
      className="flex flex-col-reverse md:flex-row gap-5 items-center justify-between px-2 my-8 md:my-5  ">
      <div className="relative w-full md:w-[33%] flex flex-col bg-transparent border-2 border-[#015987] text-[#015987]  shadow-md  rounded-md bg-clip-border">
        <div className="relative grid mx-4 mb-4 overflow-hidden text-[#015987] shadow-lg h-16 place-items-center rounded-b-md bg-gradient-to-tr from-[#015987] to-[#015987] bg-clip-border shadow-[#015987]/40">
          <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-amber-300">
            Log In
          </h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-4 px-6 pt-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="email"
                name="email"
                required
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                name="password"
                required
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
            {logInError && (
              <p className="text-red-500 px- text-center ">{logInError} </p>
            )}
            <button
              className="block w-full select-none rounded-md bg-gradient-to-tr from-[#015987] to-[#015987] py-2 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-amber-300 shadow-md shadow-[#015987]/20 transition-all hover:shadow-lg hover:shadow-[#015987]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="px-6 pb-3">
          <div className="flex items-center flex-col mt-3 ">
            <div className="flex items-end justify-center ">
              <hr className="border-[.09rem]  rounded-l-md border-[#015987] bg-[#015987] w-[5rem]  " />
              <p className="text-sm "> OR Log in with </p>
              <hr className="border-[.09rem] rounded-r-md border-[#015987] bg-[#015987] w-[5rem]  " />
            </div>
            <div className="flex items-center justify-center gap-x-2 mt-2 mb-4 ">
              <BiLogoFacebook className="text-3xl text-[#015987] border-2 border-[#015987] rounded-md p-1"></BiLogoFacebook>
              <FiGithub className="text-3xl text-[#015987] border-2 border-[#015987] rounded-md p-1"></FiGithub>
              <button onClick={handleGoogleLogIn}>
                <AiOutlineGooglePlus className="text-3xl text-[#015987] border-2 border-[#015987] rounded-md p-1"></AiOutlineGooglePlus>
              </button>
            </div>
          </div>
          <p className="flex justify-center font-sans text-sm antialiased leading-normal text-inherit">
            Don't have an account?
            <Link
              to={"/registration"}
              className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-[#015987]"
            >
              Sign up
            </Link>
          </p>
        </div>
        <ToastContainer></ToastContainer>
      </div>

      <div className="w-full md:w-[33%] ">
        <h2 className="font-light text-2xl mb-5 text-[#015987] ">{"Let's start something big together."}</h2>
        <h1 className="text-5xl font-semibold  text-[#015987] ">
          Search, <br />
          Find, and Apply!
        </h1>
      </div>

      <div className="md:w-[33%] rounded-md hidden md:block ">
        <img src={loginR} alt="" className=" w-ful rounded-md" />
      </div>
    </div>
  );
};
export default Login;
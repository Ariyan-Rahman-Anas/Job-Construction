import { useContext, useState } from "react";
// import registerBG from "/registerBG.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const [registerError, setRegisterError] = useState("") 

  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()

    const handleRegistration = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const photoURL = form.photoURL.value;
      const password = form.password.value;  
      setRegisterError("");

      if (password.length < 6) {
        setRegisterError("Password must be at least 6 character");
        return
      }
      else if (!/[A-Z]/.test(password)) {
        setRegisterError("Password must have at least 1 uppercase character")
        return
      }
      else if (!/[!@#$%^&*]/.test(password)) {
        setRegisterError("Password must have at least 1 unique character")
        return
      }
        createUser(email, password)
          .then((result) => {
            console.log(result.user);
            form.reset();
            navigate("/");
            toast("User Created Successfully!");
          })
          .catch((error) => {
            setRegisterError(error.message);
          });
    };

  return (
    <div
      className="flex flex-col-reverse md:flex-row md:items-center justify-between md:h-[90vh] gap-y- px-2 py-5 md:py-0 "
      //   style={{
      //     backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)),url(${registerBG})`,
      //     backgroundSize: "cover",
      //     backgroundRepeat: "no-repeat",
      //     backgroundPosition: "center",
      //   }}
    >
      <div className="mt-10 md:mt-0 flex items-center justify-center flex-1">
        <div className="relative flex flex-col bg-transparent border-2 border-[#015987] text-[#015987]  shadow-md w-96 rounded-md bg-clip-border">
          <div className="relative grid mx-4 mb-4 overflow-hidden text-[#015987] shadow-lg h-16 place-items-center rounded-b-md bg-gradient-to-tr from-[#015987] to-[#015987] bg-clip-border shadow-[#015987]/40">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-amber-300">
              Registration
            </h3>
          </div>
          <form onSubmit={handleRegistration}>
            <div className="flex flex-col gap-4 px-6 pt-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="text"
                  name="photoURL"
                  required
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Image URL
                </label>
              </div>
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
              {registerError && (
                <p className="text-red-600 text-center px-6 pt- pb- ">
                  {" "}
                  {registerError}{" "}
                </p>
              )}

              <button
                className="block w-full select-none rounded-md bg-gradient-to-tr from-[#015987] to-[#015987] py-2 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-amber-300 shadow-md shadow-[#015987]/20 transition-all hover:shadow-lg hover:shadow-[#015987]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="px-6 pb-3 pt-1">
            <p className="flex justify-center font-sans text-sm antialiased leading-normal text-inherit">
              Already have an account?
              <Link
                to={"/login"}
                className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-[#015987]"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className=" text-[#015987] ">
          <h1 className="text-4xl">
            <span className="text-7xl text-[#015987]">A Job,</span> <br /> where
            dreams meet the road.
          </h1>
          <p className="text-sm mt-2 text-gray-500">
            An online job marketplace is a digital platform that links job
            seekers and employers by providing a wide range of job listings,
            including freelance, part-time, and full-time positions. It offers
            tools and features to streamline the hiring process and facilitate
            connections between both parties.
          </p>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};
export default Registration;
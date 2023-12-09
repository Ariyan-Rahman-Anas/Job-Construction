import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useContext, useState } from "react";
import navbarBG from "../assets/navBG.png"
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Log out successfully.")
      })
      .catch(error => {
      console.log(error.message)
    })
  }

    const links = (
      <>
        <li>
          <NavLink
            to={"/"}
            className="px-5 py-1.5 text-white  focus:text-[#015987] focus:bg-white rounded-md "
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/addJob"}
            className="px-5 py-1.5 text-white  focus:text-[#015987] focus:bg-white rounded-md "
          >
            Add Job
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/myPostedJobs"}
            className="px-5 py-1.5 text-white  focus:text-[#015987] focus:bg-white rounded-md "
          >
            My Posted Jobs
          </NavLink>
        </li>

        {user ? (
          ""
        ) : (
          <>
            <li>
              <NavLink
                to={"/login"}
                className="px-5 py-1.5 text-white  focus:text-[#015987] focus:bg-white rounded-md "
              >
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/registration"}
                className="px-5 py-1.5 text-white  focus:text-[#015987] focus:bg-white rounded-md "
              >
                Registration
              </NavLink>
            </li>
          </>
        )}

        {user && (
          <>
            <li>
              <NavLink
                to={"/myBids"}
                className="px-5 py-1.5 text-white  focus:text-[#015987] focus:bg-white rounded-md "
              >
                My Bids
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/bidRequest"}
                className="px-5 py-1.5 text-white  focus:text-[#015987] focus:bg-white rounded-md"
              >
                Bid Requests
              </NavLink>
            </li>
            <li className="md:hidden">
              <NavLink
                to={"/"}
                className="px-5 py-1.5 text-white  focus:text-[#015987] focus:bg-white rounded-md">
                {user.email}
              </NavLink>
            </li>
          </>
        )}
      </>
    );
  
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

    return (
      <div
        style={{
          backgroundImage: `linear-gradient( to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${navbarBG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" px-5 py-1"
      >
        <nav className="flex items-center justify-between">
          <div className="toggleBtn-logo flex items-center justify-start ">
            {/* toggle icon */}
            <div
              onClick={handleMenu}
              className="toggle-btn block md:hidden text-3xl "
            >
              {menu ? (
                <RxCross2 className="text-white "></RxCross2>
              ) : (
                <RiMenuUnfoldLine className="text-white "></RiMenuUnfoldLine>
              )}
            </div>

            {/* project logo */}
            <div className="the-logo ">
              <Link to={"/"}>
                <img className="w-[10rem] " src={Logo} alt="" />
              </Link>
            </div>
          </div>

          {/* all of the nav items */}
          <div
            className={`all-nav-items z-50 rounded-md absolute md:static text-[#015987] md:text-black bg-[#015987] md:bg-transparent p-3 duration-500 ${
              menu ? "top-16" : "-top-80"
            } `}
          >
            <ul className="flex flex-col gap-y-1 md:flex-row md:items-center justify-between">
              {links}
            </ul>
          </div>
          <div className="nav-right-sec">
            {user ? (
              <div className="flex items-center justify-between gap-1">
                <img src={user.photoURL} alt="" className="hidden md:block rounded-full  h-10 w-10 " />
                <span className="text-white hidden md:block ">
                  {user.email}{" "}
                </span>
                <Link
                  onClick={handleLogOut}
                  to={"/"}
                  className="px-4 py-2 rounded-md font-semibold text-[#015987] bg-white hover:bg-amber-300 "
                >
                  Log out
                </Link>
              </div>
            ) : (
              <Link
                to={"/login"}
                className="px-4 py-2 rounded-md font-semibold text-[#015987] bg-white hover:bg-amber-300 "
              >
                Search Job
              </Link>
            )}
          </div>
        </nav>
      </div>
    );
};
export default Navbar;
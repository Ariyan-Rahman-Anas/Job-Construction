import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#015987] text-white pb-2 ">
      <footer className="w-full pt-10 px-2 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 ">
          <div className="col-span-full lg:col-span-1 flex items-start md:flex-col ">
            <p className="mb-3 text-amber-300 dark:text-gray-400 font-semibold ">
              ©Jobs Construction
            </p>
            <img src={Logo} alt="" className="w-[10rem] " />
          </div>

          <div>
            <h4 className="text-xs font-semibold  text-amber-300 uppercase dark:text-gray-100">
              Resources
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Status
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  eBook
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Community
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  What's New
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Help & Support
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold  text-amber-300 uppercase dark:text-gray-100">
              Links
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Help & Support
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Community
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  What's New
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  eBook
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2   hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Status
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-full md:col-span-1 ">
            <h4 className="text-xs font-semibold  text-amber-300 uppercase dark:text-gray-100">
              Connect us
            </h4>
            <div className="mt-3 social icons flex items-center justify-start gap-4 text-2xl text-white ">
              <Link>
                <BsFacebook></BsFacebook>{" "}
              </Link>
              <Link>
                <BsLinkedin></BsLinkedin>{" "}
              </Link>
              <Link>
                <BsTwitter></BsTwitter>{" "}
              </Link>
              <Link>
                <BsYoutube></BsYoutube>{" "}
              </Link>
            </div>

            <p className="mt-5 ">
              CopyRights 2023 || All right reserved by ©
              <a href="https://www.facebook.com/ariyanrahmananas69" target="blank" >
                Ariyan Rahman Anas
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
import { Link } from "react-router-dom";
import bannerBG from "../assets/bannerBG.png"
import bannerR from "../assets/bannerR.png"
const Banner = () => {
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)), url(${bannerBG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[100vh] md:h-[100vh] flex flex-col md:flex-row items-center justify-between relative "
      >
        <div className="flex-1 text-white pl-5 md:pl-10 pt-10  ">
          <h1 className="text-6xl md:text-7xl font-semibold  ">
            Find the job <br />that fits your Life
          </h1>
          <p className="my-8">
            An online job marketplace is a digital platform connecting job
            seekers <br />
            and employers, offering a variety of job listings, from freelance to
            full-time <br />
            positions, and streamlining the hiring process.
          </p>
          <div className="Btn flex items-center justify-start gap-x-5 uppercase ">
            <Link to={"/login"} className="bg-white text-[#191d88] rounded-md px-4 py-2 font-semibold ">
              Learn more
            </Link>
            <Link to={"/registration"} className="bg-white text-[#191d88] rounded-md px-4 py-2 font-semibold ">
              Sign up
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex-1 md:w-[40%] ">
          <img className=" " src={bannerR} alt="" />
        </div>
      </div>
    );
};

export default Banner;
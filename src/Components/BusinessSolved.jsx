import { BsFillPatchCheckFill, BsFillStarFill } from "react-icons/bs";
import Anas from "./../assets/anas.png"
import Global from "./../assets/global.png"
import Phillis from "./../assets/Phillis.jpg"

const BusinessSolved = () => {
  return (
    <div className="text-[#015987] md:h-[50%] lg:h-[80%] xl:h-[95vh] bg-gradient-to-b from-amber-50 to-amber-100 my-16 px-2 py-5 md:pb-24">
      <h1 className="font-serif text-5xl mb-1  text-[#015987] ">
        Construction<span className="text-6xl">.</span>
        <span className="text-3xl">Business Solution</span>
      </h1>
      <h1 className="font-light  mb-6 md:mb-12">
        Advanced solutions and professional talent for businesses.
      </h1>
      <div className=" flex flex-col md:flex-row items-start justify-between md:gap-16 ">
        <div className="media flex-1 ">
          <div className="parent-div relative text-white hidden md:block ">
            <div
              className="child-1 z-50 w-5/12 text-center px-10 py-3 rounded-md absolute top-0 right-0 "
              style={{
                background: `linear-gradient(rgba(1,89,135,.8), rgba(1,89,135,.8))`,
              }}
            >
              <div>
                <img src={Anas} alt="" />
                <h1 className="text-3xl mt-5 font-semibold  ">Anas</h1>
                <h2 className="font-semibold text-gray-300">Web Development</h2>
                <h3 className="flex items-center justify-center gap-1  text-gray-300 ">
                  <span>5.0</span> <BsFillStarFill></BsFillStarFill>
                </h3>
              </div>
            </div>
            <div
              className="child-2 z-30 w-4/12 text-center px-10 py-3 rounded-md absolute top-8 left-6 "
              style={{
                background: `linear-gradient(rgba(1,89,135,.8), rgba(1,89,135,.8))`,
              }}
            >
              <div>
                <img src={Global} alt="" />
                <h1 className="text-3xl mt-5 font-semibold">Global</h1>
                <h2 className="font-semibold text-gray-300">RC Agency</h2>
                <h3 className="flex items-center justify-center gap-1  text-gray-300 ">
                  <span>5.0</span> <BsFillStarFill></BsFillStarFill>
                </h3>
              </div>
            </div>
            <div
              className="child-3 z-30 w-5/12 text-center px-10 py-3 rounded-md absolute top-[5rem] left-[28%] "
              style={{
                background: `linear-gradient(rgba(1,89,135,.8), rgba(1,89,135,.8))`,
              }}
            >
              <div>
                <img src={Phillis} alt="" />
                <h1 className="text-3xl mt-5 font-semibold">Phillis</h1>
                <h2 className="font-semibold  text-gray-300">
                  Content Strategy
                </h2>
                <h3 className="flex items-center justify-center gap-1  text-gray-300">
                  <span>5.0</span> <BsFillStarFill></BsFillStarFill>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="info flex-1 ">
          <div className="all-parts flex flex-col gap-y-5">
            <div className="part-1 flex items-start justify-start gap-2">
              <BsFillPatchCheckFill className="text-3xl text-[#015987] "></BsFillPatchCheckFill>
              <div>
                <strong>Stick to your budget</strong>
                <p className="text-gray-500">
                  Find the right service for every price point. No hourly rates,
                  just project-based pricing.
                </p>
              </div>
            </div>
            <div className="part-2 flex items-start justify-start gap-2 ">
              <BsFillPatchCheckFill className="text-3xl text-[#015987] "></BsFillPatchCheckFill>
              <div>
                <strong>Get quality work done quickly</strong>
                <p className="text-gray-500">
                  Hand your project over to a talented freelancer in minutes,
                  get long-lasting results.
                </p>
              </div>
            </div>
            <div className="part-3 flex items-start justify-start gap-2">
              <BsFillPatchCheckFill className="text-3xl text-[#015987] "></BsFillPatchCheckFill>
              <div className=" ">
                <strong>Pay when you're happy</strong>
                <p className="text-gray-500">
                  Upfront quotes mean no surprises. Payments only get released
                  when you approve.
                </p>
              </div>
            </div>
            <div className="part-4 flex items-start justify-start gap-2">
              <BsFillPatchCheckFill className="text-3xl text-[#015987] "></BsFillPatchCheckFill>
              <div className=" ">
                <strong>Count on 24/7 support</strong>
                <p className="text-gray-500">
                  Our round-the-clock support team is available to help anytime,
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessSolved;

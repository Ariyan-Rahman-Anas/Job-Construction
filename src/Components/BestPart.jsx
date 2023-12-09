import { BsCheck2Circle } from "react-icons/bs";
import bestPartR from "./../assets/bestPartR.png"

const BestPart = () => {
  return (
    <div className="text-white bg-[#015987] my-16 px-2 py-8">
      <h1 className="font-serif text-5xl mb-12 text-amber-300 ">
        The best part? 
        Everything!
      </h1>
      <div className=" flex flex-col md:flex-row items-start justify-between gap-5 ">
        <div className="info flex-1 ">
          <div className="all-parts flex flex-col gap-y-5">
            <div className="part-1 flex items-start justify-start gap-2">
              <BsCheck2Circle className="text-3xl text-amber-300 "></BsCheck2Circle>
              <div>
                <strong>Stick to your budget</strong>
                <p className="text-gray-300">
                  Find the right service for every price point. No hourly rates,
                  just project-based pricing.
                </p>
              </div>
            </div>
            <div className="part-2 flex items-start justify-start gap-2 ">
              <BsCheck2Circle className="text-3xl text-amber-300 "></BsCheck2Circle>
              <div>
                <strong>Get quality work done quickly</strong>
                <p className="text-gray-300">
                  Hand your project over to a talented freelancer in minutes,
                  get long-lasting results.
                </p>
              </div>
            </div>
            <div className="part-3 flex items-start justify-start gap-2">
              <BsCheck2Circle className="text-3xl text-amber-300 "></BsCheck2Circle>
              <div className=" ">
                <strong>Pay when you're happy</strong>
                <p className="text-gray-300">
                  Upfront quotes mean no surprises. Payments only get released
                  when you approve.
                </p>
              </div>
            </div>
            <div className="part-4 flex items-start justify-start gap-2">
              <BsCheck2Circle className="text-3xl text-amber-300 "></BsCheck2Circle>
              <div className=" ">
                <strong>Count on 24/7 support</strong>
                <p className="text-gray-300">
                  Our round-the-clock support team is available to help anytime,
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="media flex-1">
          <img src={bestPartR} alt="" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default BestPart;
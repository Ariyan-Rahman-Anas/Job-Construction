import { useContext } from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const job = useLoaderData();
  const {
    _id,
    Job_title,
    Deadline,
    Price_range,
    Short_description,
    Buyer_Email,
  } = job || {};
  console.log("job is", job);

  const handleBidingForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bidingAmount = form.bidingAmount.value;
    const deadline = form.deadline.value;
    const userEmail = form.userEmail.value;
    const buyerEmail = form.buyerEmail.value;

    const aBid = {
      Job_title,
      deadline,
      bidingAmount,
      userEmail,
      buyerEmail,
    };
    console.log(aBid);

    fetch(`https://assign-11-server-iota.vercel.app/bids`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(aBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/myBids");
          toast("That's Great! You've bid on the job");
        }
        console.log(data);
      });
  };

  return (
    <div className="my-16 px-2">
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 ">
        <div className="flex-1 border border-[#015987] p-5 rounded-md ">
          <h1 className="font-semibold text-2xl text-[#015987] my-5 underline ">
            Job Details
          </h1>
          <div className=" mb-10 shadow-md rounded-md bg-gray-100 p-5 w-full md:w[50%] mx-auto ">
            <h1 className="text-3xl font-semibold text-[#015987] ">
              {Job_title}
            </h1>
            <p className="text-sm text-gray-500 my-2 ">{Short_description}</p>
            <div className="flex items-center justify-between">
              <p>
                <strong>Deadline: </strong>
                {Deadline}
              </p>
              <p>
                <strong>Price: </strong>
                {Price_range}
              </p>
            </div>
            {/* <Link
            to={`/web/${_id}`}
            className="font-semibold text-white bg-[#015987] inline-block w-full text-center py-2 rounded-md mt-5"
          >
            {Bid_Btn}{" "}
          </Link> */}
          </div>
        </div>

        <div className="flex-1 border border-[#015987] p-5 rounded-md w-full ">
          <h1 className="font-semibold text-2xl text-[#015987] my-5 underline ">
            Bid Now
          </h1>
          <div className="bid-form">
            <form
              onSubmit={handleBidingForm}
              className=" w-full md:w[70%] mx-auto "
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="number"
                    name="bidingAmount"
                    required
                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Your Biding Amount
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="date"
                    name="deadline"
                    required
                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Deadline
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="email"
                    name="userEmail"
                    required
                    readOnly
                    defaultValue={user && user.email}
                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Your Email
                  </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="email"
                    name="buyerEmail"
                    required
                    readOnly
                    defaultValue={Buyer_Email}
                    className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Buyer Email
                  </label>
                </div>
              </div>
              <button
                disabled={user?.email === Buyer_Email}
                className={`  text-white bg-[#015987] col-span-2 w-full mt-6 font-semibold  text-center py-2 rounded-md`}
                type="submit"
              >
                Bid on the project
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;

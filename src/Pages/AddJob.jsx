import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";

const AddJob = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const Job_Category = form.Job_Category.value;
    const Job_title = form.Job_title.value;
    const Email = form.Email.value;
    const Deadline = form.Deadline.value;
    const Minimum_Price = form.Minimum_Price.value;
    const Price_range = form.Price_range.value;
    const Maximum_Price = form.Maximum_Price.value;
    const Job_Description = form.Job_Description.value;

    const aAddedJob = {
      Job_Category,
      Job_title,
      Buyer_Email: Email,
      Deadline,
      Price_range,
      Minimum_Price,
      Maximum_Price,
      Job_Description,
      Bid_Btn: "Bid Now",
    };
    console.log(aAddedJob);

    fetch(`https://assign-11-server-iota.vercel.app/addJob`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(aAddedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/myPostedJobs");
          toast("You've posted a new job.");
        }
        console.log(data);
      });
  };

  return (
    <div className="px-2 my-12">
      <div>
        <h1 className="text-5xl font-light mb-5 font-serif text-[#015987] ">
          Hire a talent by your advertisement!
        </h1>

        <form onSubmit={handleAddJob}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="relative py-2 px-3  h-11 w-full min-w-[200px]">
              <select name="Job_Category">
                <option value="Web_Development">Web Development</option>
                <option value="Digital_Marketing">Digital Marketing</option>
                <option value="Graphics_Design">Graphics Design</option>
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Job Category
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                name="Job_title"
                required
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Job Title
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="email"
                name="Email"
                required
                readOnly
                defaultValue={user && user?.email}
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="date"
                name="Deadline"
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
                type="text"
                name="Minimum_Price"
                defaultValue={"$"}
                required
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Minimum Price
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                name="Maximum_Price"
                required
                defaultValue={"$"}
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Maximum Price
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                name="Price_range"
                required
                defaultValue={"$"}
                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Price Range
              </label>
            </div>
            <textarea
              name="Job_Description"
              id=""
              cols="30"
              rows="1"
              placeholder="Job Description"
              className="w-full p-2 placeholder:text-black border-2 border-transparent shadow-md rounded-md focus:border2 focus:border-[#015987] focus:outline-none "
            ></textarea>
          </div>

          <button
            type="submit"
            className="font-semibold text-white bg-[#015987] rounded-md w-full py-2 mt-5 "
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;

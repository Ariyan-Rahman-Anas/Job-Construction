import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";
import SweetAlert from "react-bootstrap-sweetalert";

const MyPostedJobs = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [postedJob, setPostedJobs] = useState([]);
  console.log("job", postedJob);
  const [showAlert, setShowAlert] = useState(false);

  const url = `https://assign-11-server-iota.vercel.app/myPostedJobs?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPostedJobs(data);
      });
  }, [user, url]);

  const handlePostedJobs = (e) => {
    e.preventDefault();
  };

  const handleUpdateJob = () => {
    navigate("/update/:id");
  };

  const handleRemoveItem = (_id) => {
    fetch(`https://assign-11-server-iota.vercel.app/myPostedJobs/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("pls dlt the item of :", data);
        if (data.deletedCount > 0) {
          toast("Deleted Successfully");
          const remaining = postedJob.filter((job) => job._id !== _id);
          if (postedJob.length > 0) {
            setPostedJobs(remaining);
          } else {
            setPostedJobs([]);
          }
        }
      });
    setShowAlert(false);
  };

  return (
    <div className="px-2 my-10">
      <h1 className="text-5xl font-light mb-2 font-serif text-[#015987] ">
        {postedJob?.length > 0
          ? "All of your job posts are here!"
          : "You didn't post any job yet!"}
      </h1>
      <p className="font-light mb-5 ">
        {postedJob.length > 0 && `You've added ${postedJob.length} job post `}{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
        {postedJob?.map((job) => (
          <div key={job._id}>
            <div className="shadow-md p-6 rounded-md ">
              <form onSubmit={handlePostedJobs}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="text"
                      name="Job_Category"
                      required
                      defaultValue={job.Job_Category}
                      className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeHolder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Job Category
                    </label>
                  </div>
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      type="text"
                      name="Job_Title"
                      required
                      defaultValue={job.Job_title}
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
                      defaultValue={job.Buyer_Email}
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
                      defaultValue={job.Deadline}
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
                      required
                      defaultValue={job.Minimum_Price}
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
                      defaultValue={job.Maximum_Price}
                      className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#015987] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeHolder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#015987] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#015987] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#015987] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Maximum Price
                    </label>
                  </div>
                </div>
                <textarea
                  name="Job_Description"
                  id=""
                  cols="30"
                  rows="2"
                  placeholder="Job Description"
                  defaultValue={job.Job_Description}
                  className="w-full p-2 placeholder:text-black border-2 border-transparent shadow-md mt-5 rounded-md focus:border2 focus:border-[#015987] focus:outline-none "
                ></textarea>
                <div className="flex items-center justify-between gap-6">
                  <Link className="font-semibold text-center bg-[#015987] rounded-md w-full  mt-5 ">
                    <button
                      className="w-full py-2 text-white "
                      onClick={() => setShowAlert(true)}
                      type="submit"
                    >
                      Delete Job
                    </button>
                    {showAlert && (
                      <SweetAlert
                        customClass={{ title: "text-red-500" }}
                        title="Are you sure?"
                        type="warning"
                        showCancel
                        confirmBtnText="Yes, delete it!"
                        confirmBtnBsStyle="danger"
                        cancelBtnText="Cancel"
                        style={{ backgroundColor: "#015987", color: "white" }}
                        onConfirm={() => handleRemoveItem(job._id)}
                        onCancel={() => setShowAlert(false)}
                      >
                        This action cannot be undone.
                      </SweetAlert>
                    )}
                  </Link>
                  <Link
                    to={`/update/${job._id}`}
                    className="font-semibold text-center text-white bg-[#015987] rounded-md w-full mt-5 "
                  >
                    <button
                      onClick={handleUpdateJob}
                      type="submit"
                      className="py-2 w-full "
                    >
                      Update Job
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;

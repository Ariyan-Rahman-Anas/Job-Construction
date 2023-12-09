import { Link } from "react-router-dom";

const WebJob = ({ job }) => {
    const {_id, Job_title, Deadline, Price_range, Job_Description, Bid_Btn } = job || {}
    return (
      <div>
        <div className="shadow-md rounded-md bg-gray-100 p-5">
          <h1 className="text-xl font-semibold text-[#015987] ">{Job_title}</h1>
          <p className="text-sm text-gray-500 my-2 ">{Job_Description}</p>
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
            <Link
              to={`/jobs/${_id}`}
              className="font-semibold text-white bg-[#015987] inline-block w-full text-center py-2 rounded-md mt-5"
            >
              {Bid_Btn}{" "}
            </Link>
        </div>
      </div>
    );
};
export default WebJob;
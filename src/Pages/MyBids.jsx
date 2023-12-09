import { useLoaderData } from "react-router-dom";
import BidedJobsCard from "../Components/BidedJobsCard";

const MyBids = () => {
    const myAllBids = useLoaderData()
    console.log(myAllBids)
    return (
      <div>
        <div className="my-10 px-2">
          {myAllBids?.map((bid) => (
            <BidedJobsCard key={bid._id} bid={bid}></BidedJobsCard>
          ))}
        </div>
      </div>
    );
};

export default MyBids;
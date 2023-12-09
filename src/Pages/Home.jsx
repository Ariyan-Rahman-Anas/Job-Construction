import BestPart from "../Components/BestPart";
import BusinessSolved from "../Components/BusinessSolved";
import JobCategory from "../Components/JobCategory";
import Banner from "./../Components/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <BestPart></BestPart>
      <BusinessSolved></BusinessSolved>
    </div>
  );
};

export default Home;

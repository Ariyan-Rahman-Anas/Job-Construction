import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WebJob from "./WebJob";
import MarketingJob from './MarketingJob';
import GraphicsJob from './GraphicsJob';

const JobCategory = () => {

  const { webData, marketingData, graphicsData } = useLoaderData();

    return (
      <div className="px-2 my-10">
        <h1 className="text-5xl font-serif text-[#015987] mb-4 ">
          Browse by Category
        </h1>
        <div>
          <Tabs>
            <TabList>
              <Tab>Web Development</Tab>
              <Tab>Digital Marketing</Tab>
              <Tab>Graphics Design</Tab>
            </TabList>

            <TabPanel>
              <p className="text-xl font-light my-4  ">
                Creating and maintaining websites and web applications using
                programming languages and frameworks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {webData?.map((job) => (
                  <WebJob key={job._id} job={job}></WebJob>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <p className="text-xl font-light my-4 ">
                Promoting products and services online through strategies like
                social media, SEO, email, and advertising to enhance brand
                visibility and drive conversions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {marketingData?.map((job) => (
                  <MarketingJob key={job._id} job={job}></MarketingJob>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <p className="text-xl font-light my-4 ">
                Designing visual content for logos, brochures, and more,
                focusing on layout, color, typography, and imagery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {graphicsData?.map((job) => (
                  <GraphicsJob key={job._id} job={job}></GraphicsJob>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
};

export default JobCategory;
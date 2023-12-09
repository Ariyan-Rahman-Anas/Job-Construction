import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "./../Pages/Login";
import Registration from "./../Pages/Registration";
import JobDetails from "./../Pages/JobDetails";
import MyBids from "../Pages/MyBids";
import AddJob from "../Pages/AddJob";
import MyPostedJobs from "./../Pages/MyPostedJobs";
import BidRequest from "../Pages/BidRequest";
import UpdateJob from "../Pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const webData = await fetch(
            `https://assign-11-server-iota.vercel.app/jobs?category=Web_Development`
          ).then((response) => response.json());
          const marketingData = await fetch(
            `https://assign-11-server-iota.vercel.app/jobs?category=Digital_Marketing`
          ).then((response) => response.json());
          const graphicsData = await fetch(
            `https://assign-11-server-iota.vercel.app/jobs?category=Graphics_Design`
          ).then((response) => response.json());
          return { webData, marketingData, graphicsData };
        },
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assign-11-server-iota.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/myBids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
        loader: () => fetch(`https://assign-11-server-iota.vercel.app/myBids`),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://assign-11-server-iota.vercel.app/myPostedJobs`),
      },
      {
        path: "/update/:id",
        element: <UpdateJob></UpdateJob>,
      },
      {
        path: "/bidRequest",
        element: (
          <PrivateRoute>
            <BidRequest></BidRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default MainRoute;

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
          <div className="flex items-center justify-center h-[80vh] ">
            <div className="flex flex-col dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                <div className="flex justify-center">
                  <div
                    className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-[#015987] rounded-full dark:text-blue-500"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }

    if (user) {
        return children
  }
    else {
      toast("Please login first!")
  }

  return (
    <div>
      <Navigate to={"/login"}></Navigate>
    </div>
  );
};
export default PrivateRoute;
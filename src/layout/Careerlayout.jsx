import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Careerlayout = () => {
  return (
    <div>
      <div className="text-center px-1 pt-16 sm:pt-20">
        <h2>Careers</h2>
        <p className=" font-edu">
          <spam className="text-red-600">At Java-Routers</spam>, we believe in
          innovation and teamwork.{" "}
          <spam className="text-red-600">Discover</spam> career paths that will
          challenge and inspire you. <spam className="text-red-600">Let</spam>
          <spam className="text-green-700">'s build the future together!</spam>
        </p>

        {/* <Breadcrumbs /> */}
        <hr className="mx-auto w-[80%] sm:w-[50%] rounded-full bg-gray-100 h-1 mt-2" />
      </div>
      <Breadcrumbs />

      <Outlet />
    </div>
  );
};

export default Careerlayout;

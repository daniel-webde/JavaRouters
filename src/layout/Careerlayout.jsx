import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Careerlayout = () => {
  return (
    <div>
      <div className="text-center px-1">
        <h2>Careers</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          recusandae dignissimos neque
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

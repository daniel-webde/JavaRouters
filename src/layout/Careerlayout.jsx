import { Outlet } from "react-router-dom";

const Careerlayout = () => {
  return (
    <div>
      <div className="text-center px-1">
        <h2>Careers</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          recusandae dignissimos neque
        </p>
      </div>

      <Outlet />
    </div>
  );
};

export default Careerlayout;

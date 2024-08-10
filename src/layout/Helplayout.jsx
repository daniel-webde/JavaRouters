import { NavLink, Outlet } from "react-router-dom";

const Helplayout = () => {
  return (
    <div className="p-4 text-center pt-16 sm:pt-20">
      <p className="">Router help</p>
      <p className="pb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, veniam?
      </p>

      <nav className="font-serif font-semibold">
        <NavLink
          to="faq"
          className="m-4 md:m-6 px-3 border-b-2 rounded-md [&.active]:bg-orange-500 [&.active]:text-white [&.active]:border-orange-500 [&.active]:shadow-md [&.active]:shadow-slate-400  transition-colors duration-300"
        >
          FAQ
        </NavLink>
        {/* <p className="rounded-md [&.active]:bg-orange-500 [&.active]:text-white [&.active]:border-orange-500 [&.active]:shadow-md [&.active]:shadow-slate-400  transition-colors duration-300">
          <NavLink
            to="faq"
            className="m-4 md:m-6 px-3 border-b-2 rounded-md [&.active]:bg-orange-500 [&.active]:text-white [&.active]:border-orange-500 [&.active]:shadow-md [&.active]:shadow-slate-400  transition-colors duration-300"
          >
            FAQ
          </NavLink>
        </p> */}
        <NavLink
          to="contact"
          className="m-4 md:m-6 px-2 border-b-2 rounded-md [&.active]:bg-orange-500 [&.active]:text-white [&.active]:border-orange-500 [&.active]:shadow-md [&.active]:shadow-slate-400 transition-colors duration-300"
        >
          Contact us
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default Helplayout;

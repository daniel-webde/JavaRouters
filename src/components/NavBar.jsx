import { NavLink } from "react-router-dom";
import { BiSolidHelpCircle } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="flex justify-between p-2 sm:p-4 font-serif">
      <NavLink
        to="/"
        className=" border-b-2 text-lg md:text-2xl font-bold [&.active]:border-orange-500 transition-colors duration-500"
      >
        JavaRouter
      </NavLink>
      <nav className="font-semibold text-gray-600 flex">
        <NavLink
          to="/"
          className="px-2 [&.active]:text-red-600 transition-colors hover:text-slate-900 hidden sm:flex"
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className="px-2 [&.active]:text-red-600 transition-colors hover:text-slate-900 duration-300"
        >
          About
        </NavLink>
        <NavLink
          to="career"
          className="px-2 [&.active]:text-red-600 transition-colors hover:text-slate-900 duration-300"
        >
          Careers
        </NavLink>
        <NavLink
          to="help"
          className=" [&.active]:text-red-600 transition-colors duration-300"
        >
          <BiSolidHelpCircle className=" size-6" />
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;

import { Link, NavLink } from "react-router-dom";
// import { BiSolidHelpCircle } from "react-icons/bi";
// import { IoHelpOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="flex justify-between p-4 font-serif">
      <Link
        to="/"
        className=" border-b-2 border-indigo-700 text-lg md:text-2xl font-bold"
      >
        JavaRouter
      </Link>
      <nav className="md:text-sm font-semibold text-gray-600 flex">
        <NavLink
          to="/"
          className="px-2 [&.active]:text-indigo-700 transition-colors hover:text-slate-900 hidden sm:flex"
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className="px-2 [&.active]:text-indigo-700 transition-colors hover:text-slate-900 duration-300"
        >
          About
        </NavLink>
        <NavLink
          to="help"
          className="border-2 px-2 rounded-full text-xm text-red-600 font-extrabold [&.active]:animate-pulse [&.active]:border-0"
        >
          ?
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;

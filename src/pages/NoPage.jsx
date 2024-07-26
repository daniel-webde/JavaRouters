import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="text-center mt-10 font-serif">
      <p className="font-semibold text-xl py-5">Page Not Found</p>
      <p className="pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        pariatur!
      </p>
      <Link
        to="/"
        className="py-2 px-3 bg-orange-500 text-gray-700 text-lg rounded-md font-serif font-semibold hover:shadow-lg hover:shadow-slate-600 hover:scale-110 duration-500"
      >
        Home
      </Link>
    </div>
  );
};

export default NoPage;

import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();

  return (
    <div>
      {careers.map((career) => (
        <div className="mx-2 my-2 px-2 py-3 bg-gray-50 hover:shadow-md duration-300 rounded-sm flex justify-between">
          <Link to="/" key={career.id}>
            <p className="font-serif font-semibold text-slate-800 hover:text-orange-600">
              {career.title}
            </p>
            <p className="text-gray-80 text-zinc-700 text-sm">
              Based in {career.location}
            </p>
          </Link>

          <p className="my-auto text-2xl font-extrabold font-serif text-gray-400 mr-2 cursor-pointer">
            &gt;
          </p>
        </div>
      ))}
    </div>
  );
};

export default Careers;

//Loader Function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/career");

  return res.json();
};

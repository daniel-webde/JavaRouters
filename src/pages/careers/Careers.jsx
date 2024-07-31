import { Link, useLoaderData } from "react-router-dom";
import progress from "../../assets/progress.gif";

const Careers = () => {
  const careers = useLoaderData();

  if (careers.error) {
    return (
      <div>
        <img src={progress} alt="Error" />
      </div>
    );
  }

  return (
    <div>
      <div className="p-2">
        <input
          type="text"
          id="search"
          className="bg-gray-50 border border-gray-300 text-gray-900
           sm:focus:ring-gray-900 sm:focus:border-gray-900 rounded-lg w-full sm:max-w-[30%] flex mx-auto ps-10 p-1 
           placeholder-gray-400"
          placeholder="Search"
        />
      </div>
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <div className="mx-2 my-2 px-2 py-3 bg-gray-50 hover:shadow-md duration-300 rounded-sm flex justify-between">
            <div className="">
              {" "}
              <p className="font-serif font-semibold text-slate-800 hover:text-orange-600">
                {career.title}
              </p>
              <p className="text-gray-80 text-zinc-700 text-sm">
                Based in {career.location}
              </p>
            </div>

            <p className="my-auto text-2xl font-extrabold font-serif text-gray-400 mr-2 cursor-pointer">
              &gt;
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

//Loader Function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/career");

  if (!res.ok) {
    throw Error("Server is Offline!");
  }

  return res.json();
};

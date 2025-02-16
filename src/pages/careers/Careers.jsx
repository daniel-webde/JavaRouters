import { useState } from "react";
import { Link } from "react-router-dom";
import { careersData } from "../../../data/data.js";

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCareers = careersData.filter((career) =>
    career.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="p-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900
           sm:focus:ring-gray-900 sm:focus:border-gray-900 rounded-lg w-full sm:max-w-[30%] flex mx-auto ps-10 p-1 
           placeholder-gray-400"
          placeholder="Search"
        />
      </div>
      <div>
        {filteredCareers.length > 0 ? (
          filteredCareers.map((career) => (
            <Link to={`/career/${career.id}`} key={career.id}>
              <div className="mx-2 my-2 px-2 py-3 bg-gray-50 hover:shadow-md duration-300 rounded-sm flex justify-between">
                <div>
                  <p className="font-serif font-semibold text-slate-800 hover:text-orange-600">{career.title}</p>
                  <p className="text-gray-700 text-sm">Based in {career.location}</p>
                </div>
                <p className="my-auto text-2xl font-extrabold font-serif text-gray-400 mr-2 cursor-pointer">&gt;</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No career found</p>
        )}
      </div>
    </div>
  );
};

export default Careers;
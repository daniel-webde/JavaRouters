import { Link, useParams } from "react-router-dom";
import { careersData } from "../../../data/data.js";

const CareerDetails = () => {
  const { id } = useParams();
  const career = careersData.find((c) => c.id === parseInt(id));

  if (!career) {
    return <p className="text-center text-gray-500">Career not found</p>;
  }

  return (
    <div className="sm:p-4">
      <div className="px-2">
        <h2 className="text-xl font-semibold text-gray-800">Career Details for <span className="text-red-700">{career.title}</span></h2>
        <p><strong>Starting salary:</strong> <span className="font-semibold text-red-700">{career.salary}</span></p>
        <p><strong>Location:</strong> <span className="font-semibold text-red-700">{career.location}</span></p>
      </div>

      <div className="p-2">
        <h3 className="font-bold font-serif text-lg">Job Summary</h3>
        <p className="pl-2 text-gray-700">{career.job_summary || "No summary available"}</p>
        <h3 className="font-bold font-serif text-lg mt-2">Job Responsibilities</h3>
        <ul className="pl-2 text-gray-700">{career.responsibilities.map((res, index) => <li key={index}>{res}</li>)}</ul>
        <h3 className="font-bold font-serif text-lg mt-2">Job Requirements</h3>
        <ul className="pl-2 text-gray-700">{career.job_requirements.map((req, index) => <li key={index}>{req}</li>)}</ul>
      </div>
      <div className="text-center mt-4">
        <Link to={`/apply/${id}`}>
          <button className="bg-orange-500 text-white py-2 px-4 text-lg rounded-md shadow-md hover:bg-orange-600 transition">Apply</button>
        </Link>
      </div>
    </div>
  );
};

export default CareerDetails;

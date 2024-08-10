import { Link, useLoaderData, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div>
      {/* <hr className="mx-auto bg-gray-400 border-0 rounded-full w-48 h-1 my-2" /> */}
      {/* <hr className="mx-auto w-[70%] sm:w-[50%] rounded-full bg-gray-100 h-1 mt-2" /> */}
      {/* <Breadcrumbs /> */}

      <div className="px-2">
        <h2>
          Career Details for{" "}
          <span className="font-semibold text-red-700">{career.title}</span>
        </h2>
        <p>
          Starting salary:{" "}
          <span className="font-semibold text-red-700">{career.salary}</span>
        </p>
        <p>
          Location:{" "}
          <span className="font-semibold text-red-700">{career.location}</span>
        </p>
      </div>
      <div className="p-2">
        <h3 className="font-bold font-serif">Job Summary</h3>
        <p className="pl-2">{career.job_summary}</p>
        {/* <h3 className="font-bold font-serif">Job Summary</h3>
        <p className="pl-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          aspernatur repellat sapiente sunt quod enim labore, eligendi aliquid
          dolor nobis asperiores minus nesciunt et eius suscipit sit? Sint
          eligendi nesciunt asperiores, eius iure quae dolorem cupiditate quia
          dolorum assumenda similique sed, repellendus veritatis nisi error
          praesentium dicta ad, corrupti consequuntur.
        </p> */}
        <h3 className="font-bold font-serif">Job Responsibilities</h3>
        <p className="pl-2">{career.responsibilities}</p>
        <h3 className="font-bold font-serif">Job requirements</h3>
        <p>{career.job_requirements}</p>
      </div>
      <div className="text-center md:rounded-lg w-full sm:max-w-40 p-2 md:p-0 border-2 bg-white sm:mx-auto">
        <Link to="/career">
          <p className="bg-orange-500 p-1 text-lg rounded-md">Apply</p>
        </Link>
      </div>
    </div>
  );
};

export default CareerDetails;

//Loader function
export const CareerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/career/${id}`);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};

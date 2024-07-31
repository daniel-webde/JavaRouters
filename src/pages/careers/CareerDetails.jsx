import { Link, useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div>
      {/* <hr className="mx-auto bg-gray-400 border-0 rounded-full w-48 h-1 my-2" /> */}
      <hr className="mx-auto w-[70%] sm:w-[50%] rounded-full bg-gray-100 h-1 mt-2" />
      <div className="p-2">
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
        <h3 className="font-bold font-serif">Job Requirements</h3>
        <p className="pl-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          voluptas qui nobis iure dignissimos numquam exercitationem suscipit
          debitis quidem sint.
        </p>
        <h3 className="font-bold font-serif">Job Summary</h3>
        <p className="pl-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          aspernatur repellat sapiente sunt quod enim labore, eligendi aliquid
          dolor nobis asperiores minus nesciunt et eius suscipit sit? Sint
          eligendi nesciunt asperiores, eius iure quae dolorem cupiditate quia
          dolorum assumenda similique sed, repellendus veritatis nisi error
          praesentium dicta ad, corrupti consequuntur.
        </p>
        <h3 className="font-bold font-serif">Responsibilities</h3>
        <ul className="pl-2">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui?
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            perspiciatis culpa, libero architecto commodi a accusantium
            consequuntur suscipit.
          </li>
          <li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nostrum
            commodi minus.
          </li>
        </ul>
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

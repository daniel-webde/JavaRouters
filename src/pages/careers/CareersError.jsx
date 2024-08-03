import { useRouteError, Link } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div className="text-center">
      <div className="text-center px-1">
        <h2>Careers</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          recusandae dignissimos neque
        </p>
      </div>

      <div className="mt-[20%] sm:mt-10">
        <h2 className="text-red-500 animate-pulse text-4xl p-4">Error</h2>
        <p className="text-gray-500 text-xl">{error.message}</p>
        <Link to="/" className=" text-cyan-600 font-serif">
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default CareersError;

import { useRouteError, Link } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();
  return (
    <div className="text-center py-12">
      <h2 className="text-red-500 animate-pulse text-4xl p-4">Error</h2>
      <p className="text-gray-500 text-xl">{error.message}</p>
      <Link to="/" className=" text-cyan-600 font-serif">
        Back to home page
      </Link>
    </div>
  );
};

export default CareersError;

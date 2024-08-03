import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let curentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      curentLink += `/${crumb}`;

      return (
        <div className="crumb pl-2" key={crumb}>
          <Link to={curentLink}>
            <span className="text-lg bg-gray-100 px-1 rounded-lg">{crumb}</span>
          </Link>
        </div>
      );
    });

  return (
    <div className="breadcrumb flex justify-center px-2 mt-1 text-gray-400 font-bold text-">
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;

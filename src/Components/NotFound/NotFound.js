import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const notFound =
  "https://www.seekpng.com/png/detail/212-2123432_404-error-error-404-in-png.png";

const NotFound = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  return (
    <div className="text-center my-5">
      <img src={notFound} width="100%" alt="" />
      <Link to="/">
        <button className="my-3 btn-primary rounded-2 border-0 px-4 py-1 fs-5">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;

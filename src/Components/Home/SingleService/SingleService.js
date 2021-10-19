import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleService = () => {
  const { serviceId } = useParams();

  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState();

  useEffect(() => {
    fetch("/homeServices.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const foundDetails = details.find(
      (item) => item.id === parseInt(serviceId)
    );
    setDetail(foundDetails);
  }, [details]);

  console.log(detail);

  return (
    <div className="py-5 min-vh-100">
      <img src={detail?.img} alt="" />
      <h2 className="py-2">
        <span className="text-primary">Service ID: </span> {detail?.id}
      </h2>
      <h2 className="py-2">
        <span className="text-primary">Name: </span> {detail?.name}
      </h2>
      <h3 className="py-2">
        <span className="text-primary">Price: </span> ${detail?.price}
      </h3>
      <p className="py-2">
        <span className="text-primary">Description: </span> {detail?.desc}
      </p>
      <Link to="/">
        <button className="my-3 btn-primary rounded-2 border-0 px-4 py-1 fs-5">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default SingleService;

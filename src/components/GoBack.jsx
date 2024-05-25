import React from "react";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <div className="container p-5">
      <p className="text-center font-bold text-xl  ">
        This page is only available for authenticated users.
      </p>
      <Link to={"/"}>
        <button className="bg-zinc-950 p-3 rounded-md hover:bg-black text-white">
          Go back
        </button>
      </Link>
    </div>
  );
};

export default GoBack;

import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h3>Something went Wrong!!</h3>
      <p>
        {err.status}: {err.statusText}
      </p>
    </div>
  );
};

export default Error;

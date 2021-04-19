import React from "react";

function EmpDeets(props) {
  return (
    <div className="text-center">
      <h3>
        Name: {props.results.name.first} {props.results.name.last}
      </h3>
      <h3>Email: {props.results.email}</h3>
      <h3>City: {props.results.location.city}</h3>
    </div>
  );
}

export default EmpDeets;

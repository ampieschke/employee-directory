import React from "react";
import "./style.css";

function EmpCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>ID:</strong> {props.id}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmpCard;

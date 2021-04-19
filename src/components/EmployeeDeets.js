import "./styles.css";
import React, { Component } from "react";
import EmpCard from "./components/EmpCard/EmpCard";
import Wrapper from "./components/Wrapper";
import emps from "./emps.json";
import API from "../utils/API";

class EmployeeDeets extends Component {
  state = {
    emps,
  };

  componentDidMount() {
    this.addEmployees("20");
  }

  addEmployees = (query) => {
    API.populate(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        <h2>Employee List</h2>
        {this.state.result.map((emp) => (
          <EmpCard
            id={this.result.id.value}
            name={this.result.name.first}
            email={this.result.email}
            location={this.result.location.city}
          />
        ))}
      </Wrapper>
    );
  }
}

// function EmpDeets(props) {
//   return (
//     <div className="text-center">
//       <h3>
//         Name: {props.results.name.first} {props.results.name.last}
//       </h3>
//       <h3>Email: {props.results.email}</h3>
//       <h3>City: {props.results.location.city}</h3>
//     </div>
//   );
// }

export default EmployeeDeets;

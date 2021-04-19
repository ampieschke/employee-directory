import "./styles.css";
import React, { Component } from "react";
import EmpCard from "./components/EmpCard/EmpCard";
import Wrapper from "./components/Wrapper";
import emps from "./emps.json";

class App extends Component {
  state = {
    emps,
  };

  render() {
    return (
      <Wrapper>
        <h2>Employee List</h2>
        {this.state.emps.map((emp) => (
          <EmpCard
            id={emp.id.value}
            name={emp.name.first}
            email={emp.email}
            location={emp.location.city}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;

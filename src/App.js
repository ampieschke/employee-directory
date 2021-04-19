import "./styles.css";
import { Home } from "./pages/Home";
import React, { Component } from "react";
import EmpCard from "./components/EmpCard/EmpCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import emps from "./emps.json";

class App extends Component {
  state = {
    emps,
  };

  render() {
    return (
      <Wrapper>
        <Title>Empllyee List</Title>
        {this.state.friends.map((emp) => (
          <EmpCard
            id={emp.id}
            key={emp.id}
            name={emp.name}
            email={emp.email}
            location={emp.location}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;

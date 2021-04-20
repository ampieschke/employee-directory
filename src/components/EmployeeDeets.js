import React, { Component } from "react";
import EmpCard from "./EmpCard/EmpCard";
import Wrapper from "./Wrapper";
// import emps from "./emps.json";
// import API from "../utils/API";

class EmployeeDeets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      emps: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?inc=id,name,location,email,&&results=5")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            emps: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  runSearch = () => {
    this.setState({
      emps: this.state.emps.filter((emp) =>
        emp.name.first.includes(this.state.search)
      ),
    });
  };
  render() {
    const { error, isLoaded, emps } = this.state;
    if (error) {
      return <div>I guess no one works here: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Wrapper>
          <h2>Employee List</h2>
          <input
            onChange={(e) => this.handleInputChange(e)}
            value={this.state.search}
            name="search"
            placeholder="Search an Employee Name"
          />
          <button onClick={() => this.runSearch()}>Submit</button>
          {emps.map((emp) => (
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
}

export default EmployeeDeets;

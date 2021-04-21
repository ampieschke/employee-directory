import React, { Component } from "react";
import "./style.css";

// import EmpCard from "./EmpCard/EmpCard";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emps: [],
      sort: "",
    };
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

  runSort = () => {
    this.setState({
      emps: this.state.emps.sort(function (a, b) {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      }),
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <h2>Employee List</h2>
            </li>
          </ul>
          <button onClick={() => this.runSort()}>Sort by Name</button>
          <div className="d-flex">
            <input
              onChange={(e) => this.handleInputChange(e)}
              value={this.state.search}
              className="form-control me-2"
              type="search"
              placeholder="Search an Employee"
            />
            <button
              className="btn btn-outline-success"
              onClick={() => this.runSearch()}
            >
              Submit
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;

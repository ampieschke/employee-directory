import React, { Component } from "react";
import EmpCard from "./EmpCard/EmpCard";
import Wrapper from "./Wrapper";
import Navbar from "./Navbar";

// import emps from "./emps.json";
// import API from "../utils/API";

class EmployeeDeets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      emps: [],
      sort: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://randomuser.me/api/?inc=id,name,location,email,picture&&results=20"
    )
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
    const { error, isLoaded, emps } = this.state;
    if (error) {
      return <div>I guess no one works here: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <h2>Employee List</h2>
                </li>
              </ul>
              <button onClick={() => this.runSort()}>Sort by Name</button>
              <div>
                <input
                  onChange={(e) => this.handleInputChange(e)}
                  value={this.state.search}
                  name="search"
                  className="form-control me-2"
                  placeholder="Search an Employee"
                />
                <button onClick={() => this.runSearch()}>Submit</button>
              </div>
            </div>
          </nav>

          <Wrapper>
            <br />
            {emps.map((emp) => (
              <EmpCard
                id={emp.id.value}
                name={emp.name.first}
                email={emp.email}
                location={emp.location.city}
                pic={emp.picture.large}
              />
            ))}
          </Wrapper>
        </div>
      );
    }
  }
}

export default EmployeeDeets;

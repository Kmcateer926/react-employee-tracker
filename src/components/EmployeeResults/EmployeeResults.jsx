import React, { Component } from "react";
import axios from "axios";
import "./EmployeeResults.css";

class EmployeeResults extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search: "",
  };
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get("https://randomuser.me/api/?results=30")
      .then((response) => {
        this.setState({
          employees: response.data.results,
          filteredEmployees: response.data.results,
        });
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const filteredEmployees = this.state.employees.filter((employee) => {
      return employee.location.city.includes(value);
      // return employee.email.includes(value);
    });

    this.setState({
      [name]: value,
      filteredEmployees: filteredEmployees,
    });
  };

  handleButtonClick = () => {
    const sortedBy = this.state.filteredEmployees.sort((a, b) => {
      return a.name.first < b.name.first ? -1 : 1;
    });
    this.setState({
      employees: sortedBy,
    });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.search}
          name="search"
          onChange={this.handleInputChange}
          type="text"
          placeholder="search by city"
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <table className="table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Name:First<button onClick={this.handleButtonClick}>
                          <i className="fas fa-caret-down"></i>
                        </button></th>{" "}
                        
                        <th>Last</th>
                        <th>Phone#</th>
                        <th>Age</th>
                        <th>City</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.filteredEmployees.map((results) => {
                        return (
                          <tr>
                            <th scope="row">
                              <img
                                src={results.picture.thumbnail}
                                className="img-fluid"
                                alt="thumbnail"
                              />
                            </th>
                            <td key={results.login.uuid}>
                              {results.name.first}
                            </td>
                            <td>{results.name.last}</td>
                            <td>
                              <a href="mailto::{results.name.phone}">
                                {results.phone}
                              </a>
                            </td>
                            <td>{results.dob.age}</td>
                            {/* <td>{results.city}</td> */}
                            <td>{results.location.city}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeResults;

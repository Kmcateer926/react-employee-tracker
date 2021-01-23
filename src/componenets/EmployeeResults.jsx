import React, { Component } from "react";
// import API from './utils/API';
import axios from "axios";
// import Table from "./Table";

class EmployeeResults extends Component {
  state = {
    employees: [],
    get: "",
  };
  componentDidMount() {
    this.searchEmployees("");
  }
  searchEmployees = (query) => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const employeeArr = response.data.results;

        console.log(employeeArr[0].gender);
        console.log(employeeArr[0].name.title);
        console.log(employeeArr[0].name.first);
        console.log(employeeArr[0].name.last);
        console.log(employeeArr[0].location.country);
        console.log(employeeArr[0].email);
        console.log(employeeArr[0].login.username);
        console.log(employeeArr[0].login.password);
        console.log(employeeArr[0].picture.large);
        this.setState({
          bioPic: employeeArr[0].picture.large,
          name:
            " " +
            employeeArr[0].name.title +
            " " +
            employeeArr[0].name.first +
            " " +
            employeeArr[0].name.last,
          location: employeeArr[0].location.country,
          email: employeeArr[0].email,
          username: employeeArr[0].login.username,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <h2>Image</h2>
                  </th>
                  <th scope="col">
                    <h2>First Name</h2>
                  </th>
                  <th scope="col">
                    <h2>Last Name</h2>
                  </th>
                  <th scope="col">
                    <h2>Email</h2>
                  </th>
                  <th scope="col">
                    <h2>Age</h2>
                  </th>
                  <th scope="col">
                    <h2>Gender</h2>
                  </th>
                  <th scope="col">
                    <h2>Country</h2>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeResults;
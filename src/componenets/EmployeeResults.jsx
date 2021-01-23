import React, { Component } from "react";
// import API from './utils/API';
import axios from "axios";
import Table from "./Table";

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
        <div>
          <div className="row">
            <div className="col">
              <div className="text-center">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Employee Picture</th>
                      {/* <th scope="col" onClick={sortBy}>
                        Name
                      </th> */}
                      <th scope="col">CellPhone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Date of Birth</th>
                    </tr>
                  </thead>
                  <table className="table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                  </tr>
                </thead>
                {[...this.state.employees].map((item) => (
                  <Table
                    picture={item.picture}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                    city={item.city}
                    key={item.key}
                  />
                ))}
              </table>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default EmployeeResults;

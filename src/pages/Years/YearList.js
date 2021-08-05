import React, { Component } from "react";
import axios from "axios";
import YearTable from "./YearTable";
import { Link } from "react-router-dom";
import userServices from "../../services/userServices";

export default class Yearlist extends Component {
  constructor(props) {
    super(props);
    this.state = { years: [] };
  }

  componentDidMount() {
    debugger;
    userServices.GetYears().then((res) => {
      if (res.status === 200) {
        this.setState({ years: res.data.result });
      }
    });
  }

  tabRow() {
    debugger;
    // const his = this.props.history;
    return this.state.years.map(function (object, i) {
      return <YearTable obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h4 align="center"> Year List</h4>
        <Link to={"/Years/AddYear/"} className="btn btn-success">
          Add New Year
        </Link>
        <table className="table table-striped" style={{ marginTop: 10 }}>
          <thead>
            <tr>
              <th>Year ID</th>
              <th>Year Start Date</th>
              <th>Year End Date</th>
              <th colSpan="3"></th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}

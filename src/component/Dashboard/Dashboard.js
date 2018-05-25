import React, { Component } from "react";
import House from "../House/House";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
    this.deleteElement = this.deleteElement.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/houses").then(response => {
      this.setState({
        houses: response.data
      });
    });
  }

  deleteElement(id) {
    axios
      .delete(`http://localhost:3001/api/deletehouse/${id}`)
      .then(response => {
        this.setState({
          houses: response.data
        });
      });
  }

  render() {
    let mapHouses;
    if (
      this.state.houses.length !== 0 &&
      this.state.houses.length != undefined
    ) {
      console.log(this.state.houses);
      mapHouses = this.state.houses.map((element, i) => {
        return (
          <div key={i}>
            <House
              name={element.name}
              address={element.address}
              city={element.city}
              state={element.state}
              zip={element.zip}
            />
            <button onClick={id => this.deleteElement(element.id)}>
              Delete
            </button>
          </div>
        );
      });
    }

    return (
      <div>
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        <House />

        {mapHouses}
      </div>
    );
  }
}
export default Dashboard;

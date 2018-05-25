import React, { Component } from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.submitHouseData = this.submitHouseData.bind(this);
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }

  onChangeZip(e) {
    this.setState({
      zip: e.target.value
    });
  }

  submitHouseData() {
    let postObject = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    };
    axios.post("http://localhost:3001/api/addhouse", postObject);
  }

  render() {
    return (
      <div>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <input onChange={e => this.onChangeName(e)} type="text" />
        <input onChange={e => this.onChangeAddress(e)} type="text" />
        <input onChange={e => this.onChangeCity(e)} type="text" />
        <input onChange={e => this.onChangeState(e)} type="text" />
        <input onChange={e => this.onChangeZip(e)} />
        <Link to="/">
          <button onClick={this.submitHouseData}>Complete</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;

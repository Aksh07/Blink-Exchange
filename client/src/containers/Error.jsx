import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Error extends Component {
  state = {};
  render() {
    return (
      <h1>
        Oops, you made an Oopsie! Make sure the address you entered is correct
      </h1>
    );
  }
}

export default Error;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/searchstyle.css";
import "react-datepicker/dist/react-datepicker.css";
/* Import Components */

import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import DatePicker from "react-datepicker";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

class BuyForm extends Component {
  state = {
    name: "",
    email: "",
    contact: "",
    startDate: new Date(),
    typeOfService: "Enter type of product/service",
    photo: "",
    serviceOptions: [
      "Electronics",
      "Service",
      "Books",
      "Clothes",
      "Sports Equipment",
      "Other"
    ]
  };

  handleSubmit = () => {};

  onPictureChange = picture => {
    this.setState({ photo: picture });
  };

  onDateChange = date => {
    this.setState({ startDate: date });
  };

  onNameChange = newName => {
    this.setState({ name: newName.target.value });
  };

  onEmailChange = newEmail => {
    this.setState({ email: newEmail.target.value });
  };

  onContactChange = newContact => {
    this.setState({ contact: newContact.target.value });
  };

  onServiceChange = (eventKey, event) => {
    this.setState({ typeOfService: this.state.serviceOptions[eventKey] });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch("/apis/post/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productName: this.state.name,
        email: this.state.email,
        contact: this.state.contact,
        photo: this.state.photo,
        typeOfService: this.state.typeOfService,
        startDate: this.state.startDate
      })
    });
    if (response.status === 200) {
      window.location.href = "/";
    }
  };

  handleClear = async event => {
    event.preventDefault();
    this.setState({
      name: "",
      contact: "",
      startDate: new Date(),
      typeOfService: "Enter type of product/service",
      photo: "",
      email: ""
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <header>
            <h2>
              <a href="/">
                <i className="ion-plane"></i> BLINK EXCHANGE
              </a>
            </h2>
            <nav>
              <ul>
                <li>
                  <a href="/sell" title="Sell">
                    Sell
                  </a>
                </li>

                <li>
                  <a href="/" title="Return to HOME Page">
                    Return to Home Page
                  </a>
                </li>
                <li>
                  <a href="/" title="LOG OUT">
                    LOG OUT
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <Form>
          <Form.Row>
            <Form.Group controlId="itemName">
              <h4>
                <Badge variant="danger">Product/Service Name</Badge>
              </h4>
              <Form.Control
                type="text"
                placeholder="Enter the name of Product/Service"
                value={this.state.name}
                onChange={this.onNameChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <h4>
                <Badge variant="danger">Email</Badge>
              </h4>
              <Form.Control
                type="email"
                placeholder="Enter your contact email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="dateOfService">
            <h4>
              <Badge variant="danger">Date Of Service</Badge>
            </h4>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.onDateChange}
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <h4>
              <Badge variant="danger">Phone Number</Badge>
            </h4>
            <Form.Control
              onChange={this.onContactChange}
              type="phone"
              placeholder="Enter contact number"
              value={this.state.contact}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group controlId="serviceType">
              <DropdownButton
                id="chooseService"
                title={this.state.typeOfService}
                onSelect={this.onServiceChange}
              >
                {this.state.serviceOptions.map((opt, i) => (
                  <Dropdown.Item key={i} eventKey={i}>
                    {opt}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
            <Form.Group controlId="chooseImage">
              <h4>
                <Badge variant="danger" placeholder={this.state.photo}>
                  Upload Image
                  <input type="file" onChange={this.onPictureChange} />
                </Badge>
              </h4>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="buttons">
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Form.Group>
            <Form.Group>
              <Button
                variant="secondary"
                type="reset"
                onClick={this.handleClear}
                target=""
              >
                Reset
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default BuyForm;

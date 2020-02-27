import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
/* Import Components */

import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class SellCatalog extends Component {
  state = { listOfItems: [] };

  fetchListOfItems = async () => {
    const response = await fetch("/apis/get/sell", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status === 200 || response.status === 304) {
      const jsonResponse = await response.json();
      await this.setState({ listOfItems: jsonResponse });
    } else console.log("Error");
  };

  renderSingleCard = item => {
    return (
      <Col>
        <Card>
          <Card.Title>
            <h5>{item.productName}</h5>
          </Card.Title>
          <Card.Body>
            Type: {item.typeOfService}
            <br />
            Date of Issue: {item.startDate}
            <br />
            Email: {item.email}
            <br />
            Phone Number: {item.contact}
          </Card.Body>
          <Button variant="primary">Like</Button>
        </Card>
      </Col>
    );
  };

  renderListOfItems = () => {
    this.fetchListOfItems();
    const expr = (
      <Row>
        {this.state.listOfItems.map((item, key) => {
          return this.renderSingleCard(item);
        })}
      </Row>
    );
    return expr;
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
                  <a href="/buy" title="Buy">
                    Buy
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
        <div alight="center">{this.renderListOfItems()}</div>
      </div>
    );
  }
}

export default SellCatalog;

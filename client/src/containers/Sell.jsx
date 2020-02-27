import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "../css/searchstyle.css";

class Sell extends Component {
  state = {};

  sellSearchButtonClick = () => {
    window.location.href = "/sell";
  };

  addSellButtonClick = () => {
    window.location.href = "/newsell";
  };

  catalogSellButtonClick = () => {
    window.location.href = "/sellcatalog";
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
        <h1 align="center">Selling Products and Services made Easy </h1>

        <Row>
          <button onClick={this.sellSearchButtonClick} className="btn fourth">
            Search
          </button>
          <button onClick={this.addSellButtonClick} className="btn fourth">
            Add a new item
          </button>
          <button onClick={this.catalogSellButtonClick} className="btn fourth">
            Catalog
          </button>
        </Row>
      </div>
    );
  }
}

export default Sell;

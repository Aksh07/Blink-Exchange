import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "../css/searchstyle.css";

class Buy extends Component {
  state = {};

  buySearchButtonClick = () => {
    window.location.href = "/buy";
  };

  addBuyButtonClick = () => {
    window.location.href = "/newbuy";
  };

  catalogBuyButtonClick = () => {
    window.location.href = "/buycatalog";
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
        <h1 align="center">Buying Products or Services Made Easy </h1>

        <Row>
          <button onClick={this.buySearchButtonClick} className="btn fourth">
            Search
          </button>
          <button onClick={this.addBuyButtonClick} className="btn fourth">
            Add a new item
          </button>
          <button onClick={this.catalogBuyButtonClick} className="btn fourth">
            Catalog
          </button>
        </Row>
      </div>
    );
  }
}

export default Buy;

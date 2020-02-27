import React, { Component } from "react";
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
    window.location.href = "/buy/catalog";
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
        <h1 align="center">
          Buying the Products or Services You Want Nade Easy{" "}
        </h1>

        <button onClick={this.buySearchButtonClick} className="btn third">
          Search
        </button>
        <button onClick={this.addBuyButtonClick} className="btn fourth">
          Add a new item
        </button>
        <button onClick={this.catalogBuyButtonClick} className="btn fourth">
          Catalog
        </button>
      </div>
    );
  }
}

export default Buy;

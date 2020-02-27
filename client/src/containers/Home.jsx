import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/searchstyle.css";
class Home extends Component {
  state = {};

  buyButtonClick = () => {
    window.location.href = "/buy";
  };

  sellButtonClick = () => {
    window.location.href = "/sell";
  };

  render() {
    return (
      <div className="pageHome">
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
                  <a href="/" title="LOG OUT">
                    LOG OUT
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        <body>
          <h1 align="center">Welcome to Blink Exchange </h1>

          <button onClick={this.buyButtonClick} className="btn first">
            BUY
          </button>
          <button onClick={this.sellButtonClick} className="btn fifth">
            SELL
          </button>
        </body>
      </div>
    );
  }
}

export default Home;

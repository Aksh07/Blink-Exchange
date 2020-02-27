import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./containers/Home";
import Buy from "./containers/Buy";
import Sell from "./containers/Sell";
import BuyForm from "./containers/BuyForm";
import SellForm from "./containers/SellForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/buy" component={Buy} />
            <Route path="/sell" component={Sell} />
            <Route path="/newbuy" component={BuyForm} />
            <Route path="/newsell" component={SellForm} />
            <Route path="/buy/catalog" componnet={BuyCatalog} />
            <Route path="/sell/catalog" component={SellCatalog} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./containers/Home";
import Buy from "./containers/Buy";
import Sell from "./containers/Sell";
import BuyForm from "./containers/BuyForm";
import SellForm from "./containers/SellForm";
import BuyCatalog from "./containers/BuyCatalog";
import SellCatalog from "./containers/SellCatalog";
import Error from "./containers/Error";

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
            <Route path="/buycatalog" component={BuyCatalog} />
            <Route path="/sellcatalog" component={SellCatalog} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

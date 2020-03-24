import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, Buy, Sell, BuyForm, SellForm, BuySearch } from "./Layouts";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/buy" component={Buy} exact />
            <Route path="/sell" component={Sell} exact />
            <Route path="/addNewBuy" component={BuyForm} exact />
            <Route path="/addNewSell" component={SellForm} exact />
            <Route path="/searchBuy" component={BuySearch} exact />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

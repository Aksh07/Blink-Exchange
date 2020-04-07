import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  HomePage,
  Buy,
  Sell,
  BuyForm,
  SellForm,
  BuyCatalog,
  SellCatalog,
} from "./Layouts";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <PrivateRoute path="/buy" component={Buy} />
          <PrivateRoute path="/sell" component={Sell} />
          <PrivateRoute path="/addNewBuy" component={BuyForm} />
          <PrivateRoute path="/addNewSell" component={SellForm} />
          <PrivateRoute path="/buyCatalog" component={BuyCatalog} />
          <PrivateRoute path="/sellCatalog" component={SellCatalog} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("userData") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default App;

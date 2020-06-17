import React, { Component, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  HomePage,
  Buy,
  Sell,
  BuyForm,
  SellForm,
  BuyCatalog,
  SellCatalog,
} from "./layout/Layouts";
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    render() {//map -create a new array by doing something with
              //each item in array
        const menu = routes.map((route, index) => {
          return (route.component) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });

        return (
            <Aux>

                   <Suspense fallback={<Loader/>}>
                      <BrowserRouter>
                        <Switch>
                            {menu}

                            <Route path="/" component={HomePage} exact />
                            <PrivateRoute path="/dashboard" component={AdminLayout} />
                            <PrivateRoute path="/buy" component={Buy} />
                            <PrivateRoute path="/sell" component={Sell} />
                            <PrivateRoute path="/addNewBuy" component={BuyForm} />
                            <PrivateRoute path="/addNewSell" component={SellForm} />
                            <PrivateRoute path="/buyCatalog" component={BuyCatalog} />
                            <PrivateRoute path="/sellCatalog" component={SellCatalog} />
                        </Switch>
                        </BrowserRouter>

                    </Suspense>

            </Aux>
        );
    }
}const PrivateRoute = ({ component: Component, ...rest }) => (
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

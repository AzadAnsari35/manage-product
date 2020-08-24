import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CreateProduct from "./Components/CreateProduct";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <CreateProduct />
        </Route>
        <Route path="/product-list" exact>
          <ProductList />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;

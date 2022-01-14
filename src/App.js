import React, { Component } from "react";
import Movies from "./components/movies";
import { Redirect, Route, Switch } from "react-router-dom";
import Customers from "./components/common/customers";
import Rentals from "./components/common/rentals";
import NotFound from "./components/not-found";
import NavBar from './components/common/navbar';
import MovieForm from './components/common/movieForm';
import LoginForm from './components/loginForm';
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path='/movies/:id' component={MovieForm}></Route>
          <Route path='/login' component={LoginForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
      </React.Fragment>
    );
  }
}

export default App;

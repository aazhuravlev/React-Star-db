import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import { PeoplePage, StarshipsPage, PlanetsPage } from "../pages";
import {StarshipDetails} from '../sw-components';

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={ this.onServiceChange } />

              <RandomPlanet />

              <Route path="/" render={ () => <h2>Welcome to StarDB</h2> } exact />
              <Route path="/people/:id?" component={ PeoplePage } />
              <Route path="/planets" component={ PlanetsPage } />
              <Route path="/starships" component={ StarshipsPage } exact />
              <Route path="/starships/:id"
                     render={ ({ match }) => {
                       const { id } = match.params;
                       return <StarshipDetails itemId={ id } />;
                     } } />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

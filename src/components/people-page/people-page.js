import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";
import Row from "../row";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import "./people-page.css";

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPerson: 3,
    };

    this.swapiService = new SwapiService();

    this.onPersonSelected = this.onPersonSelected.bind(this);
  }

  onPersonSelected(selectedPerson) {
    this.setState({ selectedPerson });
  }

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}

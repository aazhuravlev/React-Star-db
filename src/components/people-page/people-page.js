import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails, { Record } from "../item-details/item-details";
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
    const { getAllPeople, getPerson, getPersonImage } = this.swapiService;

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={getAllPeople}>
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={this.state.selectedPerson}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}

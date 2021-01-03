import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRandomPlanet: true
        };

        this.toggleRandomPlanet = this.toggleRandomPlanet.bind(this);
        this.onPersonSelected = this.onPersonSelected.bind(this);
    }

    toggleRandomPlanet() {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    onPersonSelected(id) {
        this.setState({
            selectedPerson: id
        });
    }

    render() {
        const planet = this.state.showRandomPlanet
        ? <RandomPlanet/>
        : null;

        return (
            <div className="app">
                <Header />
                {planet}

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6 d-flex">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    };
}
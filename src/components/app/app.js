import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';

import './app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showRandomPlanet: true,
            hasError: false
        };

        this.toggleRandomPlanet = this.toggleRandomPlanet.bind(this);
    }

    componentDidCatch() {
        this.setState({ hasError: true });
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
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet
            ? <RandomPlanet/>
            : null;

        return (
            <div className="stardb-app">
                <Header />
                {planet}

                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                </div>

                <PeoplePage />
            </div>
        );
    };
}
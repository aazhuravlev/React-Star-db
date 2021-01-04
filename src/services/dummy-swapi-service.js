export default class DummySwapiService {
  constructor() {
    this._people = [
      {
        id: 1,
        name: "Bilbo Baggins [TEST DATA]",
        gender: "male",
        birthYear: "long ago",
        eyeColor: "dark brown",
      },

      {
        id: 2,
        name: "Frodo Baggins [TEST DATA]",
        gender: "male",
        birthYear: "long ago",
        eyeColor: "dark brown",
      },
    ];

    this._planets = [
      {
        id: 1,
        name: "Earth [TEST DATA]",
        population: "7.530.000.000",
        rotationPeriod: "23 hours 56 seconds",
        diameter: "12.742 km",
      },
      {
        id: 2,
        name: "Venus [TEST DATA]",
        population: "not known",
        rotationPeriod: "243 days",
        diameter: "12.104 km",
      },
    ];

    this._starships = [
      {
        id: 1,
        name: "USS Enterprise [TEST DATA]",
        model: "NCC-1701-C",
        manufacturer: "Northrop Grumman Shipbuilding",
        costInCredits: "not known",
        length: "approx 300 meters",
        crew: 1000,
        passengers: 50,
        cargoCapacity: 100,
      },
    ];

    this.getAllPeople = this.getAllPeople.bind(this);
    this.getPerson = this.getPerson.bind(this);
    this.getAllPlanets = this.getAllPlanets.bind(this);
    this.getPlanet = this.getPlanet.bind(this);
    this.getAllStarships = this.getAllStarships.bind(this);
    this.getStarship = this.getStarship.bind(this);
    this.getPersonImage = this.getPersonImage.bind(this);
    this.getPlanetImage = this.getPlanetImage.bind(this);
    this.getStarshipImage = this.getStarshipImage.bind(this);
  }

  async getAllPeople() {
    return this._people;
  };

  async getPerson() {
    return this._people[0];
  };

  async getAllPlanets() {
    return this._planets;
  };

  async getPlanet() {
    return this._planets[0];
  };

  async getAllStarships() {
    return this._starships;
  };

  async getStarship() {
    return this._starships[0];
  };

  getPersonImage() {
    return `https://placeimg.com/400/500/people`;
  };

  getStarshipImage() {
    return `https://placeimg.com/600/400/tech`;
  };

  getPlanetImage() {
    return `https://placeimg.com/400/400/nature`;
  };
}

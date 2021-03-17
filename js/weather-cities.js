export default class WeatherCities {
  constructor(cities) {
    this.cities = cities;
  }

  getFirst() {
    return this.cities[0];
  }

  getLast() {
    return this.cities[this.cities.length - 1];
  }

  exportCsv() {
    return this.cities
      .map((city) => {
        return `${city.location.name} ${city.current.temperature}`;
      })
      .join(", ");
  }
}

const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      filters: [],
      selectedFilter: null,
      fruit: []
    }

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
    this.fetchFruit = this.fetchFruit.bind(this);
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({fruit: fruit}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  componentWillMount() {
    this.fetchFruit()
    this.fetchFilters()
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        updateFilterCallback={this.handleFilterChange}
        selectedFilter={this.state.selectedFilter}
        filters={this.state.filters}
       />
    )
  }
}

module.exports = App;

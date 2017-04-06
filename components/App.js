const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      filters: [],
      selectedFilter: null,
      fruit: [],
    }
    this.fetchFruit = this.fetchFruit.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
  }
  componentWillMount() {
    this.fetchFruit()
    this.fetchFilters()
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  render () {
      return (
    <FruitBasket updateFilterCallback={this.handleFilterChange} selectedFilter={this.state.selectedFilter} filters={this.state.filters} items={this.state.fruit}/>
  );
  }

}

module.exports = App;

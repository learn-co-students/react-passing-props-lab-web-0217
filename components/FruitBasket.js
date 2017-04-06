const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = (props)  => (


      <div className="fruit-basket">
        <Filter filters={props.filters} handleChange={props.updateFilterCallback} />
        <FilteredFruitList
          filter={props.selectedFilter}
          fruit={props.items}
          filters={props.filters} />
      </div>

)

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
}

module.exports = FruitBasket;

const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket =  ( props ) => (

  <div className="fruit-basket">
    <Filter handleChange={props.updateFilterCallback}
      filters={props.filters}
     />
    <FilteredFruitList
      filters={props.filters}
      fruit={props.fruit}
      filter={props.selectedFilter}
     />
    </div>
  )

  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: function() {}
  }

  module.exports = FruitBasket;

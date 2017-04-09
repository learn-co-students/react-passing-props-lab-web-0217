import React from 'react';
import { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

    // this.handleFilterChange = this.handleFilterChange.bind(this);

  // handleFilterChange(e) {
  //   console.log('new filter: ', e.target.value);
  //   this.setState({ selectedFilter: e.target.value });
  // }

  const FruitBasket = ({
    fruit,
    filters,
    currentFilter,
    onUpdateFilter
  }) => {
    return (
      <div className="fruit-basket">
        <Filter
          filters={filters}
          handleChange={onUpdateFilter} />
        <FilteredFruitList
          fruit={fruit}
          filter={currentFilter} />
      </div>
    );
  };

  FruitBasket.defaultProps = {
    currentFilter: null,
    filters: [],
    fruit: [],
    updateFilterCallback: () => {}
  }


export default FruitBasket;

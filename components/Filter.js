import React from 'react';
import { Component } from 'react';

const Filter = (props) =>{
  const filters = []
  props.filters.map((filter, i) =>{
    filters.push(<option key={i}>filter</option>)
  })
  return(
    <select onChange={props.handleChange}>
      <div value="all">
        {filters}
      </div>
    </select>
  )
}

Filter.defaultProps = {
  filters: null,
  handleChange: null
}

export default Filter;

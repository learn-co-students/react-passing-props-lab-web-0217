import React from 'react';
import { Component } from 'react';

const FilteredFruitList = (props) => {
  const fruits = []
  props.fruit.map((fruit) =>{
    if((props.filter === fruit.fruit_type) || (props.filter === null)){
      fruits.push(<li>{fruit.char}</li>)
    }
  })
  return(
    <ul className="fruit-list">
      {fruits}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: null,
  filter: null

}

export default FilteredFruitList;

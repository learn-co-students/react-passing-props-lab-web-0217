import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }
  render(){
    return(
      <h1>Nailed it</h1>
    )
  }
}

export default App;

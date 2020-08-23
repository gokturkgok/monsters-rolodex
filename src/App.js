import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField : ''
    }
  }

  // lifecycle method
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({ monsters : users}))
    
  }

  // arrow function gives an auto bind where the prop is place.
  handleChange = (e) => {
    this.setState({
      searchField: e.target.value 
    });
  };

  // lifecycle method
  render(){

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={ e => this.handleChange(e) }
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

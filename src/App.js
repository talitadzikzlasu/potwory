import React, {Component} from 'react';

import './App.css';

import {CardList} from './coponent/card-list/card-list.coponent';
import {SearchBox} from './coponent/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => {console.log(users); this.setState({monsters: users})})
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    console.log(monsters);
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log("F:", filteredMonsters);
    return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters}/> 
    </div>)
  }
}

export default App;

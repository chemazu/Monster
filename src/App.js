import React, { Component } from 'react'
import './App.css';
import CardList from './Components/CardList/CardList'; 
import Search from './Components/Search/Search';


export class App extends Component {
  constructor(){
    super()
    this.state={
      monsters:[],
      searchField : '',
    }
  }
  componentDidMount(){
    const url ='https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res=> res.json())
    .then( data=> this.setState({monsters:data}))
  }
  handleChange=(e)=>{this.setState({searchField:e.target.value})}
  render() {
    const {monsters, searchField}= this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))//1. monster.name returns the name of the function since the name could be anything, 2. .includes checks if what is typed in searchField exists in monster 
    return (
      <div className="App">
        <Search type ='search' placeholder ={'Search Monster Name'} handleChange = {this.handleChange}/>
        <CardList monsters={filteredMonsters}/> 
      </div> 
    )
  }
}



export default App;

import './App.css'
import React, { Component } from 'react'
import { CardList } from './components/cart-list/card-list.component'
import { SearchBar } from './components/search-bar/search-bar.component'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await data.json()
      this.setState({ monsters: users })
    } catch (error) {
      console.log('fail to fetch data')
    }
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filtedMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App' >
        <h1> Monsters Rolodex </h1>
        <SearchBar
          placeholder={'search monsters'}
          handleChange={this.handleChange}
        />
        <CardList monsters={filtedMonsters} />
      </div >
    )
  }
}
export default App

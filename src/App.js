import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list";
import { SearchBox } from "./component/search-box/search-box.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: "",
      title: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchFeild, title } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild)
    );

    return (
      <div className="App">
        <h1>{title}</h1>
        <SearchBox
          placeholder="Search monsters"
          handelChange={e => this.setState({ searchFeild: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

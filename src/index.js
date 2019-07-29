import React, { Component } from "react";
import ReactDOM from "react-dom";
import CardList from "./components/CardList/CardList";
import Search from "./components/Search/Search";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  onSearchMonster = event => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(monster =>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="App">
        <Search
          handleChange={this.onSearchMonster}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

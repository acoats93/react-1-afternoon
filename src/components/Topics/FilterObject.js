import React, { Component } from 'react';

class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      heroes: [
        {
          name: 'Bruce Wayne',
          superheroName: 'Batman',
          weaknesses: 'parent issues'
        },
        {
          name: 'Saitama',
          superheroName: 'Caped Baldy',
          superPower: 'Unlimited Strength',
          faveFood: 'bananas'
        },
        {
          name: 'Katsuki Bakugou',
          superheroName: 'King Explosion Murder',
          superPower: 'explosive hands',
          weaknesses: 'easily taunted'
        }
      ],

      userInput: '',
      filteredHeroes: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterHeroes(prop) {
    let heroes = this.state.heroes;
    let filteredHeroes = [];

    for ( let i = 0; i < heroes.length; i++ ) {
      if ( heroes[i].hasOwnProperty(prop) ) {
        filteredHeroes.push(heroes[i]);
      }
    }

    this.setState({ filteredHeroes: filteredHeroes });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.heroes, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterHeroes(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredHeroes, null, 10) } </span>
      </div>
    )
  }
}

export default FilterObject;
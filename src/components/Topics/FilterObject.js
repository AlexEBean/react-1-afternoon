import React, { Component } from 'react';

class FilterObject extends Component {
    constructor () {
        super()

    this.state = {
        unFilteredArray: [
            {
                name: "Mama Mia",
                title: "Joker",
                age: 16
            },
            {
                name: "Pancakes",
                age: 18
            },
            {
                name: "Nick",
                title: "Defense Attorney",
                hair: "spiky"
            }
        ],
        userInput: "",
        filteredArray: []
    }
}

    handleChange(value) {
        this.setState({ userInput: value });
    }

    filterEmployees(userInput) {
        const unfiltered = this.state.unFilteredArray
        let filtered = []

        for (let i = 0; i < unfiltered.length; i++) {
            if (unfiltered[i].hasOwnProperty(userInput)) {
                filtered.push(unfiltered[i])
            }
        }
        this.setState ({filteredArray: filtered})
    }

  render() {
    return (
        <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
        </div>
    )
  }
}

export default FilterObject
import React, { Component } from 'react';

class FilterString extends Component {
    constructor () {
        super()

        this.state = {
            unFilteredNames: ["Criminal Harry Potter", "Nyquil", "Athlete", "Princess", "Basketcase", "Brain", "Glasses", "Floof", "Pancakes", "Purple"],
            userInput: "",
            filteredNames: []
        }
    }
  
    handleChange(value) {
        this.setState({ userInput: value });
      }

    filterNames(userInput) {
        const unfiltered = this.state.unFilteredNames
        let filtered = []

        for (let i = 0; i < unfiltered.length; i++) {
            if (unfiltered[i].includes(userInput)) {
                filtered.push(unfiltered[i])
            }
        }
        this.setState ({filteredNames: filtered})
    }

    render() {
    return (
        <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.unFilteredNames, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) }  </span>
      </div>
    )
  }
}

export default FilterString
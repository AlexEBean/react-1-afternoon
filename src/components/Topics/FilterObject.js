import React, {Component} from 'react'

class FilterObject extends Component {

    constructor() {
        super ()

        this.state = {
            unfilteredArray: [
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
                }
            ],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }

      filterTheArray (prop) {
          let people = this.state.unfilteredArray
          let filteredArray = []

          for (let i = 0; i < people.length; i++) {
              if (people[i].hasOwnProperty(prop)) {
                  filteredArray.push(people[i])
              }
          }
          this.setState ({filteredArray: filteredArray})
      }


    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.unfilteredArray, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.filterTheArray(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
      </div>
        )
    }
}

export default FilterObject
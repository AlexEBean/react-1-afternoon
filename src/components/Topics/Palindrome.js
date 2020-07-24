import React, {Component} from 'react'

class Palindrome extends Component {
    constructor() {
        super();
    
        this.state = {
          userInput: '',
          palindrome: ''
        };
      }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    isPalindrome(userInput) {
        let normal = userInput;
        let backward = normal;
        backward = backward.split("");
        backward = backward.reverse();
        backward = backward.join("")

        if ( normal === backward ) {
            this.setState({ palindrome: 'true' });
          } else {
            this.setState({ palindrome: 'false' });
          }
    }

    render() {
        return (
            <div className="puzzleBox palindromePB">
              <h4> Palindrome </h4>
              <input className="inputLine" onChange = {(el) => this.handleChange(el.target.value)}/>
              <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
              <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}

export default Palindrome
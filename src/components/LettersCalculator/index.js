// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    countLetters: '',
  }

  enterThePhrase = event => {
    const {value} = event.target

    this.setState({countLetters: value})
  }

  render() {
    const {countLetters} = this.state

    return (
      <div className="app-container">
        <div className="counter-image-block">
          <div className="counter-block">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label-text" htmlFor="input-text">
                Enter the phrase
              </label>

              <input
                type="text"
                id="input-text"
                className="input"
                placeholder="Enter The Phrase"
                onChange={this.enterThePhrase}
                value={countLetters}
              />
            </div>
            <div className="counter-display">
              <p className="counting-text">
                No.of letters: {countLetters.length}
              </p>
            </div>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  isFirstNameClick = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  isLastNameClick = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="bottom-container">
          <div>
            <button
              type="button"
              className="button"
              onClick={this.isFirstNameClick}
            >
              Show/Hide Firstname
            </button>
            {isFirst && <p className="name-first-last">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.isLastNameClick}
            >
              Show/Hide Lastname
            </button>
            {isLast && <p className="name-first-last">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

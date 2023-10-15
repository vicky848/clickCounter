import React, {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="header">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button type="button" onClick={this.onIncrementCount} className="btn">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter

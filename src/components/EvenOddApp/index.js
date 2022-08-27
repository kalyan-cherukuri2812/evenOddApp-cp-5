import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prev => ({
      count: prev.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="p1">Count is Even</p>
          ) : (
            <p className="p1">Count is Odd</p>
          )}

          <button onClick={this.increment} className="btn" type="button">
            Increment
          </button>
          <p className="p2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

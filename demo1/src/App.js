import React, { Component } from 'react'
import HOCEnhance from './HOC_enhance_props'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>hello everyone!</h1>
        <HOCEnhance></HOCEnhance>
      </div>
    )
  }
}

export default App

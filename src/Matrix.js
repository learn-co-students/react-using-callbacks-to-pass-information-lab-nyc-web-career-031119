import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: ""
    }
  }

  selectColor = (hexColor) => {
    this.setState({
      selectedColor: hexColor
    })
  }

  setColor = () => {
    return this.state.selectedColor;
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} setColor={this.setColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log(this.state.selectedColor)
    return (
      <div id="app">
        <ColorSelector selectColor={this.selectColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}

import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      color: "#FFF"
    }

  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} newColor={this.state.color}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  handlesColorClick = (e) =>{
    console.log("clicked the Bar");
    console.log(e.target.style.backgroundColor);
    this.setState({color: e.target.style.backgroundColor})
  }


  render() {
    return (
      <div id="app">
        <ColorSelector onClickBar={this.handlesColorClick}/>
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

import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {
    selectedColor: null
  };

  setColor = color => {
    // debugger;
  	this.setState({
		  selectedColor: color
	  })
  };

  genRow = (vals) => (
    vals.map((val, idx) => <Cell cellColor={this.state.selectedColor} key={idx} color={val} />)
  );

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  );

  render() {
    console.log(this.state.selectedColor);
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};

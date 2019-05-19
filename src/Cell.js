import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handlesColorChange =(e)=>{
    console.log("clicked the Pic");
    this.setState({color: this.props.newColor})

  }


  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handlesColorChange}>
      </div>
    )
  }

}

import React from 'react';
import './index.css';

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

export default class PlayNumber extends React.Component {

  render() {
    return (
      <button 
        className="number" 
        style={ {backgroundColor: colors[this.props.status]}}
        onClick={() => this.props.clickSelected(this.props.number, this.props.status)}
      >
          {this.props.number}
      </button>
    );       
  }
}    

import React from 'react';

export default class RestartGame extends React.Component {

  render() {
    return (
        <div className="game-done">
          <div className="message">Game is {this.props.gameStatus}</div>
          <button
            onClick={this.props.restartGame}            
          >
            Restart Game      
          </button>
        </div>
    );       
  }
}    

import React from 'react';
import './index.css';
import utils from '../../utils'
import useGameState from '../../state'

import PlayNumber from '../PlayNumber';
import RestartGame from '../RestartGame';
import StarsDisplay from '../StarsDisplay';

//Set State

//Interpret State

const GameBoard = (props) => {

  const {stars, unusedNumbers, selectedNumbers, secondsLeft, gameStatus, setGameState} = useGameState();

  const numberStatus = (number) => {
    if (!unusedNumbers.includes(number)){
      return 'used';
    }

    if (selectedNumbers.includes(number)) {
        return utils.sum(selectedNumbers) > stars ? 'wrong' : 'candidate';
    }

    return 'available';
  };

  const toggleNumberSelection = (number, currentStatus) => {

    if (currentStatus === 'used' || gameStatus !== 'active') {
      return;
    }

    setGameState(number);
    
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ? ( <RestartGame restartGame={props.resetGame} gameStatus={gameStatus} /> ) : ( <StarsDisplay stars={stars}/> ) }
        </div>
        <div className="right">
        {  
          utils.range(1, 9).map(number => 
            <PlayNumber 
              key={number} 
              number={number} 
              status={numberStatus(number)}
              clickSelected={toggleNumberSelection}
            />
          )
        }
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default GameBoard;


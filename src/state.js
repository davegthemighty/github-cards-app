//Custom Hook
import { useState } from 'react';
import utils from './utils';

const useGameState = () => {

  const [stars, setStars] = useState(utils.random(1, 9));
  const [unusedNumbers, setUnusedNumbers] = useState(utils.range(1, 9));
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);
  
  const gameStatus = unusedNumbers.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  const setGameState = (number) => {
      //If is is selected already then it is either a candidate, or wrong, and this will de-select it.
      if (selectedNumbers.includes(number)) {
        //Remove selected
        setSelectedNumbers(selectedNumbers.filter(item => item !== number));
        return;
      }
  
      //The current selection is correct, so we 
      // -- mark selected as used
      // -- clear selectedNumbers 
      // -- refresh stars
      const newSelection = [...selectedNumbers, number];
  
      if (utils.sum(newSelection) === stars) {
        const newUnused = unusedNumbers.filter(unused => !newSelection.includes(unused) )
        setUnusedNumbers(newUnused);
        setSelectedNumbers([]);
        //Cannot be a count that can no longer be achieved
        setStars(utils.randomSumIn(newUnused, 9));
        return;
      }
  
      //Add selected
      setSelectedNumbers(newSelection);
  };
  
  return {stars, unusedNumbers, selectedNumbers, gameStatus, setGameState, secondsLeft, setSecondsLeft};

};

export default useGameState;
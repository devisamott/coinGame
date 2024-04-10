import React, { useState } from 'react';
import { CoinBoard } from '../coinBoard';
import { GameControls } from '../gameControls';
import { GameInfo } from '../gameInfo';

export function CoinLogic() {
  const [coins, setCoins] = useState([]);
  const [correctNumber, setCorrectNumber] = useState(null);
  const [attempts, setAttempts] = useState(3);
  const [message, setMessage] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  console.log(shuffleArray);

  const initializeGame = () => {
    const numCoins = getRandomNumber(4, 10);

    const correctNum = getRandomNumber(1, numCoins);
    setCorrectNumber(correctNum);

    const newCoins = [];
    for (let i = 1; i <= numCoins; i++) {
      newCoins.push({
        number: i,
        revealed: false
      });
    }
    setCoins(shuffleArray(newCoins));
    setGameStarted(true); 
  };

  const handleClick = (number) => {
    const coin = coins.find((coin) => coin.number === number);
    const isValidClick = coin && !coin.revealed && attempts > 0 && message === '';

    if (isValidClick) {
      const updatedCoins = coins.map((coin) =>
        coin.number === number ? { ...coin, revealed: true } : coin
      );
      setCoins(updatedCoins);
      if (number === correctNumber) {
        setMessage('¡Has encontrado el número correcto!');

      } else {
        setAttempts(attempts - 1);
        if (attempts === 1) {
          setMessage('¡Te has quedado sin intentos!');
        }
      }
    }
  };

  const onRestartGame = () => {
    setCoins([]);
    setCorrectNumber(null)
    setAttempts(3);
    setMessage('');
    setGameStarted(false); 
  };

  return (
    <div>
      <h1>Encuentra el numero oculto</h1> 
      {gameStarted &&
        <h1>numero oculto: {correctNumber}</h1>
      }
      <CoinBoard coins={coins} onCoinClick={handleClick} />
      
      <GameControls 
        onStartGame={initializeGame} 
        onRestartGame={onRestartGame} 
        disabled={gameStarted} 
      />
      <GameInfo attempts={attempts} message={message} />
    </div>
  );
}



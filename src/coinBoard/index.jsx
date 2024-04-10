import React from 'react';
import { Coin } from '../coin';

export function CoinBoard({ coins, onCoinClick }) {
  return (
    <div>
      {coins.map((coin) => (
        <Coin key={coin.number} number={coin.number} revealed={coin.revealed} onClick={() => onCoinClick(coin.number)} />
      ))}
    </div>
  );
}



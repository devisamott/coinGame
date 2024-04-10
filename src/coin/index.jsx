import React from 'react';

export function Coin({ number, revealed, onClick }) {
  return (
    <div 
      onClick={onClick} 
      className={`coin ${revealed ? 'revealed' : ''}`} 
    >
      {revealed ? number : 'X'}
    </div>
  );
}



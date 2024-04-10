import React from 'react';

export function GameInfo({ attempts, message }) {

  return (
    <div>
      <p>intentos disponibles: {attempts}</p>
      <p> {message}</p>
    </div>
  );
}


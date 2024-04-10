import React from 'react';

export function GameControls({ 
    onStartGame, 
    onRestartGame, 
    disabled
}) {
  return (
    <div>
      <button onClick={ onStartGame } disabled={ disabled }>Iniciar juego</button>
      {disabled && < button onClick={ onRestartGame } >
          Volver a jugar
        </button>
      }
    </div>
  );
}



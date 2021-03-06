import React, { useState } from 'react';
import { GameInfoTypeForGameVsComputer } from 'types';
import Act from './Act/Act';
import './GameInfo.scss';
import { Scores } from './Scores/Scores';

export const GameInfoVsComputer = ({
  winner,
  counter,
  xTurn,
  setGameField,
  setXTurn,
  setCounter,
  firstPlayerX,
}) => {
  const [firstPlayerScores, setFirstPlayerScores] = useState(0);
  const [secondPlayerScores, setSecondPlayerScores] = useState(0);
  const [ties, setTies] = useState(0);

  const startNewGame = () => {
    if (!firstPlayerX && winner != null) {
      setFirstPlayerScores(firstPlayerScores + 1);
    } else if (firstPlayerX && winner != null) {
      setSecondPlayerScores(secondPlayerScores + 1);
    } else {
      setTies(ties + 1);
    }

    setGameField(Array(9).fill(null));
    setCounter(0);
    setXTurn(true);
  }

  return (
    <div className="game__info info">
      <span className="info__moves">
        Count of moves:
        <b className="info__value">{counter}</b>
      </span>

      <Act
        counter={counter}
        winner={winner}
        xTurn={xTurn}
      />

      <Scores
        firstPlayerScores={firstPlayerScores}
        secondPlayerScores={secondPlayerScores}
        ties={ties}
      />

      {(winner || counter > 8) && (
        <button
          className="info__restart-btn"
          onClick={startNewGame}
          type="button"
        >
          Start new game
        </button>
      )}
    </div>
  );
};

GameInfoVsComputer.propTypes = GameInfoTypeForGameVsComputer;

import { useState } from "react";

import GameBoard from "./components/GameBoard";
import GameStatus from "./components/GameStatus";
import ResetButton from "./components/ResetButton";

import { calculateWinner } from "./utils/calculateWinner";

export default function App() {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null),
  );

  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  const isDraw = !winner && squares.every((square) => square !== null);

  const currentPlayer = xIsNext ? "X" : "O";

  const handleClick = (index: number) => {
    if (squares[index] || winner) return;

    const nextSquares = [...squares];

    nextSquares[index] = currentPlayer;

    setSquares(nextSquares);

    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <main
      className="
        flex min-h-screen
        items-center
        justify-center
        bg-black
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border border-zinc-800
          bg-zinc-950
          p-8
          shadow-2xl
        "
      >
        <h1
          className="
            mb-8
            text-center
            text-4xl
            font-bold
            text-white
          "
        >
          Tic Tac Toe
        </h1>

        <GameStatus
          winner={winner}
          isDraw={isDraw}
          currentPlayer={currentPlayer}
        />

        <div className="flex justify-center">
          <GameBoard squares={squares} onClick={handleClick} />
        </div>

        <div className="flex justify-center">
          <ResetButton onReset={resetGame} />
        </div>
      </div>
    </main>
  );
}

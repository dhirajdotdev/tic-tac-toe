import Square from "./Square";

type GameBoardProps = {
  squares: (string | null)[];
  onClick: (index: number) => void;
};

export default function GameBoard({ squares, onClick }: GameBoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}

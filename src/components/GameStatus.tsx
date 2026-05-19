type GameStatusProps = {
  winner: string | null;
  isDraw: boolean;
  currentPlayer: string;
};

export default function GameStatus({
  winner,
  isDraw,
  currentPlayer,
}: GameStatusProps) {
  return (
    <div
      className="
        mb-6
        rounded-2xl
        border border-zinc-800
        bg-zinc-900
        px-6
        py-4
        text-center
        text-lg
        font-medium
        text-zinc-200
      "
    >
      {winner
        ? `Winner: ${winner}`
        : isDraw
          ? "It's a Draw!"
          : `Current Turn: ${currentPlayer}`}
    </div>
  );
}

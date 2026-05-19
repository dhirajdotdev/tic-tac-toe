type SquareProps = {
  value: string | null;
  onClick: () => void;
};

export default function Square({ value, onClick }: SquareProps) {
  return (
    <button
      onClick={onClick}
      className="
        h-24 w-24
        rounded-2xl
        border border-zinc-700
        bg-zinc-900
        text-4xl
        font-bold
        text-white
        transition-all
        hover:bg-zinc-800
        active:scale-95
      "
    >
      {value}
    </button>
  );
}

type ResetButtonProps = {
  onReset: () => void;
};

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      className="
        mt-6
        rounded-xl
        bg-white
        px-6
        py-3
        font-medium
        text-black
        transition-all
        hover:scale-105
        active:scale-95
      "
    >
      Reset Game
    </button>
  );
}

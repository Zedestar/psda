function FullRoundedButton({ text, bgcolo, textColor, onClick }) {
  return (
    <button
      className={`bg-green-400 p-4 mx-4 text-white text-2xl border border-white rounded-full hover:scale-105 `}
      onClick={onClick}
    >
      Get started today{" "}
    </button>
  );
}

export default FullRoundedButton;

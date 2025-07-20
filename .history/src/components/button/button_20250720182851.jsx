function FullRoundedButton({ text, bgColor, textColor, onClick }) {
  return (
    <button
      className={`${bgColor} p-4 mx-4 ${textColor} text-2xl border border-gray-100 rounded-full hover:scale-105 `}
      onClick={onClick}
    >
      {text}{" "}
    </button>
  );
}

export default FullRoundedButton;

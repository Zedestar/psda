function FullRoundedButton({ text, bgColor, textColor, onClick }) {
  return (
    <button
      className={`${bgColor} py-1 px-2 mx-4 ${textColor} text-xl border border-gray-200 rounded-full hover:scale-105 transition duration:300`}
      onClick={onClick}
    >
      {text}{" "}
    </button>
  );
}

export default FullRoundedButton;

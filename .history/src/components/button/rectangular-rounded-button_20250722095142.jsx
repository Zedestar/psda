function RectangularRoundedButton({ text, onclick }) {
  return (
    <button
      onClick={onclick}
      className="px-4  rounded-lg text-lg hover:text-gray-100 bg-slate-200 hover:bg-blue-400 transition border border-gray-400"
    >
      {text}{" "}
    </button>
  );
}

export default RectangularRoundedButton;

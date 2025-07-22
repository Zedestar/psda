function RectangularRoundedButton({
  text,
  onclick,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
}) {
  return (
    <button
      onClick={onclick}
      className={`px-4  rounded-lg text-lg hover:${hoverTextColor} bg-slate-200 hover:${hoverBgColor} transition border border-gray-400`}
    >
      {text}{" "}
    </button>
  );
}

export default RectangularRoundedButton;

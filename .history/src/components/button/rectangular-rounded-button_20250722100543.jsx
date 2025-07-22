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
      className={`px-4  rounded-lg text-lg ${textColor} hover:${hoverTextColor} ${bgColor}  hover:${hoverBgColor} transition border border-gray-300`}
    >
      {text}{" "}
    </button>
  );
}

export default RectangularRoundedButton;

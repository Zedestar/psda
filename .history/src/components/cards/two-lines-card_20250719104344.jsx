function TwoLinesCards({ item }) {
  return (
    <div
      className={`flex items-center flex-col ${item.bgColor} p-4 m-5 rounded-lg w-64`}
    >
      <p className={`text-3xl font-bold ${item.textColor}`}>{item.number}</p>
      <p className="text-gray-600 ">{item.content}</p>
    </div>
  );
}

export default TwoLinesCards;

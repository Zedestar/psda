function TwoLinesCards({ item }) {
  return (
    <div className="flex items-center flex-col bg-blue-100 p-4 rounded-lg w-40">
      <p className="text-3xl font-bold text-blue-400">{item.number}</p>
      <p className="text-gray-500">Founded</p>
    </div>
  );
}

export default TwoLinesCards;

function SecondaryCard({ item }) {
  return (
    <div className="border flex flex-col justify-center mx-4 my-3 space-y-4 px-4 py-12 rounded-lg text-start max-w-lg hover:shadow-lg transition  bg-white">
      <div className="w-full flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full ${item.color} w-20 h-20`}
        >
          {item.icon}
        </div>
      </div>

      <p className={`text-4xl ${item.text_color}`}>{item.title}</p>
      <p className="text-xl ">{item.content}</p>
    </div>
  );
}

export default SecondaryCard;

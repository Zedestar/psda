function SecondaryCard({ item }) {
  return (
    <div className="border flex flex-col justify-center mx-4 my-3 h-82 w-82 space-y-2 px-4 py-6 rounded-lg text-start max-w-lg hover:scale-105 transition  bg-white">
      <div className="w-full flex items-center justify-start">
        <div
          className={`flex items-center justify-center rounded-full ${item.color} w-16 h-16`}
        >
          {item.icon}
        </div>
      </div>

      <p className={`text-2xl ${item.text_color}`}>{item.title}</p>
      <p className="text-lg">{item.content}</p>
    </div>
  );
}

export default SecondaryCard;

function PrimaryCard({ item }) {
  return (
    <div className="w-[80%] border flex flex-col justify-center mx-4 my-3 space-y-2 px-4 py-6 rounded-lg text-center max-w-lg hover:shadow-lg transition  bg-white">
      <div className="w-full flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full ${item.color} w-16 h-16`}
        >
          {item.icon}
        </div>
      </div>

      <p className={`text-lg md:text-xl ${item.text_color}`}>{item.title}</p>
      <p className="text-md md:text-lg">{item.content}</p>
    </div>
  );
}

export default PrimaryCard;

function FaceCard({ item }) {
  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <p className="text-lg lg:text-3xl w-[80%] font-bold text-gray-600 text-center">
        {item.title}
      </p>
      <p className="text-xl w-full md:w-[70%] text-center text-gray-600">
        {item.description}
      </p>
    </div>
  );
}

export default FaceCard;

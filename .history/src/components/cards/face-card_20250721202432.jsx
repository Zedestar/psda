function FaceCard({ item }) {
  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <p className="text-5xl w-[80%] font-bold text-gray-600 text-center">
        {item.title}
      </p>
      <p className="text-2xl w-[70%] text-center text-gray-600">
        {item.description}
      </p>
    </div>
  );
}

export default FaceCard;

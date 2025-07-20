function FaceCard({ item }) {
  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <p className="text-6xl w-[80%] font-bold text-gray-600 text-center">
        {item.title}
      </p>
      <p className="text-xl w-[80%] text-center">{item.description}</p>
    </div>
  );
}

export default FaceCard;

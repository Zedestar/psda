function FaceCard({ item }) {
  return (
    <div className="space-y-4 bg-rose-400 flex flex-col items-center justify-center p-2">
      <p className="text-5xl w-[80%] font-bold text-gray-600 text-center">
        {item.title}
      </p>
      <p className="text-lg w-[80%] text-center">{item.description}</p>
    </div>
  );
}

export default FaceCard;

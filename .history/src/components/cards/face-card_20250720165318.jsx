function FaceCard({ item }) {
  return (
    <div className="space-y-4">
      <p className="text-3xl font-bold text-gray-600">{item.title}</p>
      <p className="text-lg w-[80%] text-center">{item.description}</p>
    </div>
  );
}

export default FaceCard;

function FaceCard({ item }) {
  return (
    <div>
      <p className="text-3xl font-bold text-gray-600">{item.title}</p>
      <p className="text-lg w-[80%]">{item.description}</p>
    </div>
  );
}

export default FaceCard;

function LeadersCard({ item }) {
  return (
    <div className="border flex flex-col justify-center mx-4 my-3 space-y-4 px-4 py-7 rounded-lg text-center max-w-lg hover:shadow-lg transition  bg-white">
      <div className="w-full flex items-center justify-center ">
        <div className="flex items-center justify-center text-3xl rounded-full w-20 h-20 bg-gradient-to-br from-blue-400 to-green-500">
          {item.initials}
        </div>
      </div>

      <p className="text-xl font-bold">{item.name}</p>
      <p className="text-lg text-blue-500">{item.title}</p>
      <p className="text-md">{item.description}</p>
    </div>
  );
}

export default LeadersCard;

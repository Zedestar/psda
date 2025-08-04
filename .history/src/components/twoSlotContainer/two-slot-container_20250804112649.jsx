function TwoSlotContainer({ firstSlot, secondSlot }) {
  return (
    <div className="flex flex-col md:flex-row justify-between px-5 gap-4 w-full">
      <div className="bg-white border border-gray-200 shadow-lg flex-1 h-screen p-4 rounded-md">
        {firstSlot}
      </div>

      <div className="w-full md:w-96 px-2 rounded-md">{secondSlot}</div>
    </div>
  );
}

export default TwoSlotContainer;

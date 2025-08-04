function TwoSlotContainer({ firstSlot, secondSlot }) {
  return (
    <div className="flex flex-col md:flex-row justify-between px-5 gap-4 w-full">
      <div className="bg-white md:w-2/3 h-screen p-2 rounded-md">
        {firstSlot}
      </div>

      <div className="bg-white md:w-1/3 p-2 rounded-md">{secondSlot}</div>
    </div>
  );
}

export default TwoSlotContainer;

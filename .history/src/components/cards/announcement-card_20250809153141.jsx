function AnnouncementCard() {
  const instensity = [100, 200, 50, 500, 300, 400, 600, 700, 800, 900];
  const colors = ["rose", "green", "blue", "orange", "violent"];

  return (
    <div className="max-w-xl flex flex-col bg-white border-l-4 border-green-500 mx-4 p-4 rounded-lg shadow-sm hover:shadow-lg transition space-y-2">
      <div className="flex items-center justify-between space-x-2  ">
        <div>
          <p className="bg-green-300 text-sm border border-gray-200 px-2 w-fit flex items-center justify-center rounded-full text-white">
            program
          </p>
          <p className="text-md font-bold text-gray-600">
            New Digital Art Workshop Series Starting December
          </p>
        </div>
        <div className="text-sm">
          <p className="text-gray-600">Sunday, December 1, 2024</p>
          <p className="text-gray-600">4:00PM - 6:00PM</p>
        </div>
      </div>
      <div>
        <p className="text-md text-gray-500">
          Calling all creative minds! We're launching a new 6-week digital art
          workshop series where participants will learn graphic design, digital
          illustration, and animation. Limited spots available - perfect for
          ages 12-18.
        </p>
      </div>
      <div className="flex space-x-2 text-sm">
        <p
          className={`bg-violet-400 font-semibold border border-gray-200 px-3  flex items-center justify-center rounded-full text-white`}
        >
          program
        </p>
        <p className="bg-blue-300 font-semibold border border-gray-200 px-3 flex items-center justify-center rounded-full text-white">
          Education
        </p>
        <p className="bg-orange-200 font-semibold border border-gray-200 px-3 flex items-center justify-center rounded-full text-white">
          Partnership
        </p>
      </div>
      <button className="w-1/2 rounded-lg text-lg hover:text-gray-100 bg-slate-200 hover:bg-blue-400 transition border border-gray-400">
        Learn more{" "}
      </button>
    </div>
  );
}

export default AnnouncementCard;

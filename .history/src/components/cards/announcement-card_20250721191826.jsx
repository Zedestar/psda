function AnnouncementCard() {
  return (
    <div className="flex flex-col bg-white mx-4 p-4 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition w-11/12 space-y-4">
      <div className="flex items-center justify-between space-x-2  ">
        <div>
          <p className="bg-green-400 p-1 w-2/12 flex items-center justify-center">
            program
          </p>
          <p className="text-3xl font-bold text-gray-600">
            New Digital Art Workshop Series Starting December
          </p>
        </div>
        <div>
          <p>Sunday, December 1, 2024</p>
          <p>4:00PM - 6:00PM</p>
        </div>
      </div>
      <div>
        <p className="text-lg text-gray-500">
          Calling all creative minds! We're launching a new 6-week digital art
          workshop series where participants will learn graphic design, digital
          illustration, and animation. Limited spots available - perfect for
          ages 12-18.
        </p>
      </div>
      <div className="flex space-x-3">
        <p>Partnership</p>
        <p>Education</p>
        <p>Librart</p>
      </div>
      <button className="w-2/12 py-2 rounded-lg text-lg bg-slate-200 hover:bg-blue-400 transition border border-gray-400">
        Learn more{" "}
      </button>
    </div>
  );
}

export default AnnouncementCard;

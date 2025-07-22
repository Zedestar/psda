function AnnouncementCard() {
  return (
    <div className="flex flex-col bg-white mx-4 p-4 rounded-lg shadow">
      <div className="flex space-x-2">
        <div>
          <p>program</p>
          <p>New Digital Art Workshop Series Starting December</p>
        </div>
        <div>
          <p>Sunday, December 1, 2024</p>
          <p>4:00PM - 6:00PM</p>
        </div>
      </div>
      <div>
        <p>
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

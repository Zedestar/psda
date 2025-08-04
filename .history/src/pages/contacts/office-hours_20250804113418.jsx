function OfficeHours() {
  return (
    <ul className="bg-white border border-gray-200 shadow-lg p-4 rounded-md space-y-2">
      <li className="flex items-center justify-start space-x-2">
        <AiOutlineClockCircle className="text-xl text-blue-400 font-bold" />
        <p className="font-bold">Office Hours</p>
      </li>
      <li className="flex flex-row items-center justify-between">
        <p
          className="text-gray-500 text-sm md:text-md 
                "
        >
          Monday-Friday
        </p>
        <p className="font-bold text-sm md:text-md text-gray-600">
          9:00 AM - 5:00 PM
        </p>
      </li>
      <li className="flex flex-row items-center justify-between">
        <p className="text-gray-500 text-sm md:text-md">Saturday</p>
        <p className="font-bold text-sm md:text-md text-gray-600">
          10:00 AM - 3:00 PM
        </p>
      </li>
      <li className="flex flex-row items-center justify-between">
        <p className="text-gray-500 text-sm md:text-md">Sunday</p>
        <p className="font-bold text-sm md:text-md text-gray-600">Closed</p>
      </li>
      <div className="flex flex-row bg-rose-50 p-3 rounded-md mx-4">
        <p className="text-gray-600 text-sm">
          <strong className="text-gray-700 text-sm">Note:</strong> We respond to
          emails and voicemails within 24 hours during business days
        </p>
      </div>
    </ul>
  );
}

export default OfficeHours;

import { FaMapMarkedAlt } from "react-icons/fa";

function FindUs() {
  return (
    <ul className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg hover:shadow-xl transition-all duration-300 space-y-3 text-gray-600">
      <li>
        <h2 className="font-bold">Find Us</h2>
      </li>
      <li className="flex flex-col items-center justify-center space-y-2 rounded-md h-36 w-full bg-gray-200">
        <FaMapMarkedAlt />
      </li>
    </ul>
  );
}

export default FindUs;

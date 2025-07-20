import { FaCalendarAlt, FaMapMarkedAlt, FaUsers } from "react-icons/fa";

function ProjectsCard() {
  return (
   export default function ProjectsCard() {
  return (
    <div className="rounded-lg border space-y-5 hover:scale-105 transition overflow-hidden h-fit shadow-sm">
      {/* Image section */}
      <div
        className="h-40 w-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/psdas.jpg')",
        }}
      >
        {/* Status badges */}
        <div className="absolute top-2 left-2 flex space-x-2">
          <p className="bg-blue-500 text-white text-xs rounded-full px-3 py-1">
            Active
          </p>
          <p className="bg-white text-gray-700 text-xs border rounded-full px-3 py-1">
            Cultural
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="p-4 space-y-3">
        <p className="text-xl font-semibold text-blue-500">Title of the project</p>

        <p className="text-sm text-gray-700">
          PSDA began in 2021 when a group of young leaders and mentors saw the need to support pastors’ children through a dedicated, faith-based community. Starting with just 12 members, we've grown into a strong network of sons and daughters walking similar
        </p>

        <ul className="text-sm text-gray-600 space-y-1">
          <li className="flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-400" />
            <span>Ongoing since January 2024</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaUsers className="text-blue-400" />
            <span>25 participants</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaMapMarkedAlt className="text-blue-400" />
            <span>River side park Dodoma</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
  );
}

export default ProjectsCard;

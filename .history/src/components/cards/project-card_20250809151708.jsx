import { FaCalendarAlt, FaMapMarkedAlt, FaUsers } from "react-icons/fa";

function ProjectsCard({ item }) {
  return (
    <div className="rounded-lg overflow-hidden my-3 h-fit border space-y-5 mx-4 hover:scale-105 transition bg-white shadow-md">
      <div
        className="h-52"
        style={{
          backgroundImage: "url('images/psdas.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-start justify-start  space-x-2 p-2">
          <p className="bg-blue-400 text-white  rounded-full px-2">
            {item.status}
          </p>
          <p className="border bg-white text-black rounded-full px-2">
            {item.category}
          </p>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div>
          <p className="text-md text-blue-400">{item.title}</p>
        </div>
        <div>
          <p className="">{item.description}</p>
        </div>
        <ul>
          <li className="flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-400" />
            <p>{item.date}</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaUsers className="text-blue-400" />
            <p>{item.participants}</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaMapMarkedAlt className="text-blue-400" />
            <p>{item.location}</p>{" "}
          </li>
        </ul>
        <button className="m-4 bg-blue-400 w-[80%] py-2 rounded-md">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default ProjectsCard;

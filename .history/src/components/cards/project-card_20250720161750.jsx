import { FaCalendarAlt, FaMapMarkedAlt, FaUsers } from "react-icons/fa";

function ProjectsCard() {
  return (
    <div className="rounded-lg my-3 h-fit border space-y-5 hover:scale-105 transition bg-white">
      <div
        className="h-52"
        style={{
          backgroundImage: "url('images/psdas.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-start justify-start  space-x-2">
          <p className="bg-blue-400 text-white  rounded-full px-2">Active</p>
          <p className="border bg-white text-black rounded-full px-2">
            Cultural
          </p>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div>
          <p className="text-xl text-blue-400">Title of the project</p>
        </div>
        <div>
          <p className="">
            {" "}
            PSDA began in 2021 when a group of young leaders and mentors saw the
            need to support pastors’ children through a dedicated, faith-based
            community. Starting with just 12 members, we've grown into a strong
            network of sons and daughters walking similar
          </p>
        </div>
        <ul>
          <li className="flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-400" />
            <p>On going since january 2024</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaUsers className="text-blue-400" />
            <p>25 participants</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaMapMarkedAlt className="text-blue-400" />
            <p>River side park Dodoma</p>{" "}
          </li>
        </ul>
      </div>
      <button className="m-4">Learn more</button>
    </div>
  );
}

export default ProjectsCard;

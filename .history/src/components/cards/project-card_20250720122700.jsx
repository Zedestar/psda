import { FaCalendarAlt, FaMapMarkedAlt, FaUsers } from "react-icons/fa";
import psdasPic from "../../assets/images/psdas.jpg";

function ProjectsCard() {
  return (
    <div className="rounded-lg h-fit border space-y-5 hover:scale-105 transition overflow-hidden">
      <div
        className="h-32 absolute"
        style={{
          backgroundImage: "url('images/psdas.jpg')",
        }}
      >
        <div className="flex items-center justify-center  space-x-2">
          <p className="border bg-blue-400 text-white  rounded-full px-2">
            Active
          </p>
          <p className="border bg-transparent rounded-full px-2">Cultural</p>
        </div>
      </div>
      <div>
        <p className="text-xl text-blue-400">Title of the project</p>
      </div>
      <div>
        <p>
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
  );
}

export default ProjectsCard;

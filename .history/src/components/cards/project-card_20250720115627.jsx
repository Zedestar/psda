import { FaCalendarAlt } from "react-icons/fa";
import psdasPic from "../../assets/images/psdas.jpg";

function ProjectsCard() {
  return (
    <div className="rounded-xl border space-y-5 hover:scale-105 transition">
      <div>
        <img src={psdasPic} alt="" />
      </div>
      <div>
        <p>Title of the project</p>
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
        <li>
          <FaCalendarAlt />
          <p>On going since january 2024</p>
        </li>
        <li> 25 participants</li>
        <li>River side park Dodoma</li>
      </ul>
    </div>
  );
}

export default ProjectsCard;

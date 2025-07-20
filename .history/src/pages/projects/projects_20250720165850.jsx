import FaceCard from "../../components/cards/face-card";
import ProjectsCard from "../../components/cards/project-card";
import project_face_card_data from "./face-card-data";
import projectsData from "./projects-data";

function Projects() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-10 space-y-6 my-5 overflow-x-scroll">
      <div className="w-[80%] flex items-center justify-center mt-2">
        {project_face_card_data.map((item) => (
          <FaceCard item={item} />
        ))}
      </div>
      <div className="w-full max-w-screen-2xl p-6 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-9">
        {projectsData.map((item) => (
          <ProjectsCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

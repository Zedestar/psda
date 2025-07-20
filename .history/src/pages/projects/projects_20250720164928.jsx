import FaceCard from "../../components/cards/face-card";
import ProjectsCard from "../../components/cards/project-card";
import projectsData from "./projects-data";

function Projects() {
  return (
    <div className="w-full h-full flex justify-center my-5 overflow-x-scroll">
      <div className="w-[80%]">
        {projectsData.map((item) => (
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

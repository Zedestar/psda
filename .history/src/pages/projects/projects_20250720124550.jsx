import ProjectsCard from "../../components/cards/project-card";

function Projects() {
  return (
    <div className="w-full h-full flex justify-center my-5 overflow-x-scroll">
      <div className="w-full max-w-screen-2xl p-6 ">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
}

export default Projects;

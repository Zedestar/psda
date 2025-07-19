import ProjectsCard from "../../components/cards/project-card";

function Projects() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full max-w-screen-2xl grid grid-cols-3 gap-4">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
}

export default Projects;

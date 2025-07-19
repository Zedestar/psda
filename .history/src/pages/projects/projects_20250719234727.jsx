import ProjectsCard from "../../components/cards/project-card";

function Projects() {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-screen-2xl">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
}

export default Projects;

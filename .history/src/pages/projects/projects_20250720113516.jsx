import ProjectsCard from "../../components/cards/project-card";

function Projects() {
  return (
    <div className="w-full h-full flex justify-center my-5">
      <div className="w-full max-w-screen-2xl grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-9">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </div>
  );
}

export default Projects;

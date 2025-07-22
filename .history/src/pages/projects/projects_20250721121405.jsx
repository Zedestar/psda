import FullRoundedButton from "../../components/button/full-rounded-button.jsx";
import FaceCard from "../../components/cards/face-card";
import ProjectsCard from "../../components/cards/project-card";
import Container from "../../components/container";
import project_face_card_data from "./face-card-data";
import project_idea_data from "./project-idea-data";
import projectsData from "./projects-data";
import MinContainer from "../../components/min-container/min-container.jsx";
import MinContianerInsideContent from "../../components/min-container/min-container-inside-content.jsx";

function Projects() {
  return (
    <Container>
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

      <MinContainer>
        {project_idea_data.map((item) => (
          <FaceCard item={item} />
        ))}
        <MinContianerInsideContent>
          <FullRoundedButton
            text={"Submit your idea"}
            bgColor={"bg-blue-400"}
            textColor={"text-white"}
            onClick={null}
          />
          <FullRoundedButton
            text={"Join existing project"}
            bgColor={"bg-white"}
            textColor={"text-black"}
            onClick={null}
          />
        </MinContianerInsideContent>
      </MinContainer>
    </Container>
  );
}

export default Projects;

import FullRoundedButton from "../../components/button/button";
import FaceCard from "../../components/cards/face-card";
import ProjectsCard from "../../components/cards/project-card";
import Container from "../../components/container";
import project_face_card_data from "./face-card-data";
import project_idea_data from "./project-idea-data";
import projectsData from "./projects-data";

function Projects() {
  return (
    <Container ></Container>
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

        <div className="bg-slate-200 py-8 rounded-lg space-y-4 hover:shadow-xl border border-gray-300 transition">
          {project_idea_data.map((item) => (
            <FaceCard item={item} />
          ))}
          <div className="flex items-center justify-center my-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

import Container from "../../components/container";
import MinContainer from "../../components/min-container/min-container.jsx";
import MinContianerInsideContent from "../../components/min-container/min-container-inside-content.jsx";
import announcements_face_card_data from "./announcemntes.-face-card-data.js";
import stay_updated_content_data from "./stay-updated-content-data.js";
import FaceCard from "../../components/cards/face-card";

function Announcements() {
  return (
    <Container>
      {announcements_face_card_data.map((item) => (
        <FaceCard item={item} />
      ))}
      <MinContainer>
        {stay_updated_content_data.map((item) => (
          <FaceCard item={item} />
        ))}
        <MinContianerInsideContent>
          <form className="rounded-lg">
            <input />
          </form>
        </MinContianerInsideContent>
      </MinContainer>
    </Container>
  );
}

export default Announcements;

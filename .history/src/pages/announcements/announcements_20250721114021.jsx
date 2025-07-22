import Container from "../../components/container";
import announcements_face_card_data from "./announcemntes.-face-card-data.js";
import stay_updated_content_data from "./";
import FaceCard from "../../components/cards/face-card";

function Announcements() {
  return (
    <Container>
      {announcements_face_card_data.map((item) => (
        <FaceCard item={item} />
      ))}
      <MinContainer>{stay_updated_content_data}</MinContainer>
    </Container>
  );
}

export default Announcements;

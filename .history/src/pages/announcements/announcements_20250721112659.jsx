import Container from "../../components/container";
import announcements_face_card_data from "./"

function Announcements() {
  return <Container>{announcements_face_card_data.map((item) => <FaceCard item={item}/>)}</Container>;
}

export default Announcements;

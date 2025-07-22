import FaceCard from "../../components/cards/face-card";
import Container from "../../components/container/index";
import support_out_mission_data from "./support_out_mission_data";
import way_to_contribute_data from "./way_to_contribute_data";

function Contributions() {
  return (
    <Container>
      {support_out_mission_data.map((item) => (
        <FaceCard item={item} />
      ))}
      {way_to_contribute_data.map((item) => (
        <FaceCard item={item} />
      ))}
    </Container>
  );
}

export default Contributions;

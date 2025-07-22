import FaceCard from "../../components/cards/face-card";
import Container from "../../components/container/index";
import how_to_contribute_data from "./how_to_contribute_data";
import how_contribution_impacted_community_data from "./impact_data";
import support_out_mission_data from "./support_out_mission_data";
import voice_from_community_data from "./voices_from_community_data";
import way_to_contribute_data from "./way_to_contribute_data";
import MinContainer from "../../components/cards/";

function Contributions() {
  return (
    <Container>
      {support_out_mission_data.map((item) => (
        <FaceCard item={item} />
      ))}
      {way_to_contribute_data.map((item) => (
        <FaceCard item={item} />
      ))}
      {how_to_contribute_data.map((item) => (
        <FaceCard item={item} />
      ))}
      {how_contribution_impacted_community_data.map((item) => (
        <FaceCard item={item} />
      ))}
      {voice_from_community_data.map((item) => (
        <FaceCard item={item} />
      ))}

      <MinContainer></MinContainer>
    </Container>
  );
}

export default Contributions;

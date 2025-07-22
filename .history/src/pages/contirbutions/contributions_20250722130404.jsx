import FaceCard from "../../components/cards/face-card";
import Container from "../../components/container/index";
import how_to_contribute_data from "./how_to_contribute_data";
import how_contribution_impacted_community_data from "./impact_data";
import support_out_mission_data from "./support_out_mission_data";
import voice_from_community_data from "./voices_from_community_data";
import way_to_contribute_data from "./way_to_contribute_data";
import MinContainer from "../../components/min-container/min-container";
import other_way_to_support_us_data from "./other_way_to_support_us_data";
import MinContianerInsideContent from "../../components/min-container/min-container-inside-content";
import ContributionCard from "../../components/cards/contribution-card";
import other_way_to_support_us_card_data from "./other_way_to_support_us_card_data";
import { AiOutlineHeart } from "react-icons/ai";

function Contributions() {
  return (
    <Container>
      {support_out_mission_data.map((item) => (
        <FaceCard item={item} />
      ))}
      <MinContainer>
        <AiOutlineHeart />
      </MinContainer>
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

      <MinContainer>
        {other_way_to_support_us_data.map((item) => (
          <FaceCard item={item} />
        ))}
        <MinContianerInsideContent>
          {other_way_to_support_us_card_data.map((item) => (
            <ContributionCard item={item} />
          ))}
        </MinContianerInsideContent>
      </MinContainer>
    </Container>
  );
}

export default Contributions;

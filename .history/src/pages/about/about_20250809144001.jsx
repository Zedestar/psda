import FaceCard from "../../components/cards/face-card";
import LeadersCard from "../../components/cards/leaders-card";
import PrimaryCard from "../../components/cards/primary-card";
import SecondaryCard from "../../components/cards/secondary-card";
import TwoLinesCards from "../../components/cards/two-lines-card";
import Container from "../../components/container";
import Footer from "../../components/footer/footer";
import GridOrganizerContainer from "../../components/gridOrganizerContainer";
import aboutUsData from "./about-us-data";
import core_objectives_data from "./core-objective-goals-data";
import our_core_value_data from "./core-value-data";
import historyStatusData from "./history-status-data";
import leadersData from "./leaders-data";
import mission_vission_impact_data from "./mission-vission-impact";
import our_leadership_data from "./our-leadership-data";

function AboutPage() {
  return (
    <Container>
      <div className="flex flex-col m-5 space-y-6">
        {aboutUsData.map((item) => (
          <FaceCard item={item} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around mx-12">
        {mission_vission_impact_data.map((item) => (
          <PrimaryCard item={item} />
        ))}
      </div>
      <div className="flex flex-col m-5 space-y-6">
        {our_core_value_data.map((item) => (
          <FaceCard item={item} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {core_objectives_data.map((item) => (
          <SecondaryCard item={item} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center ">
        <div className="flex flex-col  m-5 space-y-6 w-1/2">
          <p className="text-3xl font-semibold text-gray-800">
            Our Core Values
          </p>
          <p className="text-gray-600 text-xl">
            PSDA began in 2021 when a group of young leaders and mentors saw the
            need to support pastors’ children through a dedicated, faith-based
            community. Starting with just 12 members, we've grown into a strong
            network of sons and daughters walking similar journeys. What began
            as small fellowships has grown into a diverse program offering
            discipleship, leadership training, entrepreneurship, creative arts,
            and outreach—shaped by the voices of the members themselves. Today,
            our alumni are making meaningful impacts in ministry, business, and
            their communities, living out the purpose and values nurtured
            through PSDA.
          </p>
        </div>
        <div className="grid grid-cols-1">
          {historyStatusData.map((item) => (
            <TwoLinesCards item={item} />
          ))}
        </div>
      </div>
      {/* <div className="flex flex-col m-5 space-y-6"> */}
      {our_leadership_data.map((item) => (
        <FaceCard item={item} />
      ))}
      {/* </div> */}
      <GridOrganizerContainer>
        {leadersData.map((item) => (
          <LeadersCard item={item} />
        ))}
      </GridOrganizerContainer>
      <Footer />
    </Container>
  );
}

export default AboutPage;

import PrimaryCard from "../../components/cards/primary-card";
import aboutUsData from "./about-us-data";
import core_objectives_data from "./core-objective-goals-data";
import mission_vission_impact_data from "./mission-vission-impact";

function AboutPage() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full h-full py-5 max-w-screen-2xl flex flex-col items-center">
        <div className="flex flex-col m-5 space-y-6">
          <p className="text-center text-6xl font-semibold text-gray-800">
            About Pastor's Sons and Daughters Association
          </p>
          <p className="text-center text-gray-600 text-2xl">{aboutUsData}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around mx-12">
          {mission_vission_impact_data.map((item) => (
            <PrimaryCard item={item} />
          ))}
        </div>
        <div className="flex flex-col m-5 space-y-6">
          <p className="text-center text-6xl font-semibold text-gray-800">
            Our Core Values
          </p>
          <p className="text-center text-gray-600 text-2xl">
            These values guide everything we do and shape the character of our
            community.
          </p>
        </div>
        <div>
          {core_objectives_data.map((item) => (
            <PrimaryCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

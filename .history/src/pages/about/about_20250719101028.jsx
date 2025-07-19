import PrimaryCard from "../../components/cards/primary-card";
import SecondaryCard from "../../components/cards/secondary-card";
import aboutUsData from "./about-us-data";
import core_objectives_data from "./core-objective-goals-data";
import mission_vission_impact_data from "./mission-vission-impact";

function AboutPage() {
  return (
    <div className="w-full h-full flex justify-center overflow-x-scroll">
      <div className="w-full h-full py-10 max-w-screen-2xl flex flex-col items-center">
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
        <div className="grid grid-cols-3">
          {core_objectives_data.map((item) => (
            <SecondaryCard item={item} />
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col m-5 space-y-6">
            <p className="text-center text-4xl font-semibold text-gray-800">
              Our Core Values
            </p>
            <p className="text-center text-gray-600 text-2xl">
              PSDA began in 2021 when a group of young leaders and mentors saw
              the need to support pastors’ children through a dedicated,
              faith-based community. Starting with just 12 members, we've grown
              into a strong network of sons and daughters walking similar
              journeys. What began as small fellowships has grown into a diverse
              program offering discipleship, leadership training,
              entrepreneurship, creative arts, and outreach—shaped by the voices
              of the members themselves. Today, our alumni are making meaningful
              impacts in ministry, business, and their communities, living out
              the purpose and values nurtured through PSDA.
            </p>
          </div>
          <div>
            <div className="flex flex-col bg-blue-50 p-4">
              <p>2021</p>
              <p>Founded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

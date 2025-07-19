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
            <p className="text-center text-6xl font-semibold text-gray-800">
              Our Core Values
            </p>
            <p className="text-center text-gray-600 text-2xl">
              The Pastors’ Seed Development Association (PSDA) was born out of a
              heartfelt vision in 2021, when a group of passionate youth leaders
              and church mentors recognized a deep need: to create a space where
              children of pastors could be supported, empowered, and understood.
              Many of these young people were silently carrying unique
              pressures—living in the spotlight, expected to lead, yet often
              lacking the same support they give to others. What began as a
              small gathering of just 12 committed individuals has since grown
              into a vibrant and expanding community of sons and daughters of
              pastors from across the region. These aren’t just members—they are
              brothers and sisters walking the same path, building one another
              up through mentorship, skill development, spiritual growth, and a
              strong sense of belonging. Today, PSDA offers a dynamic range of
              programs—from leadership and discipleship workshops, to
              entrepreneurship training, creative arts, and social impact
              outreach. Every initiative is shaped by the voices and needs of
              the pastors' children themselves—because no one understands their
              journey better than they do. Our alumni are now walking boldly in
              their callings—some in ministry, others in business, education,
              and the creative industries—carrying with them the values,
              confidence, and identity that PSDA helped nurture. Together,
              they’re not only honoring the legacy of their parents but also
              building one of their own.
            </p>
          </div>
          <div>
            <div>
              <p>there trhere akdalkdlkdfl</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

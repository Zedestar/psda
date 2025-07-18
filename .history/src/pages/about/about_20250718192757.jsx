import aboutUsData from "./about-us-data";
import mission_vission_impact_data from "./mission-vission-impact";

function AboutPage() {
  return (
    <div className="w-full h-full py-5 ">
      <div className="flex flex-col m-5 space-y-6">
        <p className="text-center text-6xl font-semibold text-gray-800">
          About pastor's sons and daughters
        </p>
        <p className="text-center text-gray-600 text-2xl">{aboutUsData}</p>
      </div>
      <div className="flex mx-12">
        {mission_vission_impact_data.map((item) => (
          <div className="border flex flex-col">
            <p className="text-3xl">{item.title}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;

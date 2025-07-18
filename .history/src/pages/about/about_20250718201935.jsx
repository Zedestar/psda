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
      <div className="flex flex-col lg:flex-row items-center justify-around mx-12 max-w-screen-2xl">
        {mission_vission_impact_data.map((item) => (
          <div className="border flex flex-col justify-center mx-4 space-y-4 p-4 rounded-lg text-center max-w-lg hover:shadow-slate-800 bg-white">
            <div className="w-full flex items-center justify-center">
              <div
                className={`flex items-center justify-center rounded-full ${item.color} w-20 h-20`}
              >
                {item.icon}
              </div>
            </div>

            <p className="text-3xl">{item.title}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;

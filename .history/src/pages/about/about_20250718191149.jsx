import aboutUsData from "./about-us-data";

function AboutPage() {
  return (
    <div className="w-full h-full py-5 ">
      <div className="flex flex-col m-5 space-y-6">
        <p className="text-center text-6xl font-semibold text-gray-800">
          About pastor's sons and daughters
        </p>
        <p className="text-center text-gray-600 text-2xl">{aboutUsData}</p>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutPage;

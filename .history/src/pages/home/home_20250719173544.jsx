import HomePic from "../../components/homepic";

function Home() {
  return (
    <div className="w-full h-full">
      <HomePic />
      <div className="flex flex-col m-5 space-y-6">
        <p className="text-center text-6xl font-semibold text-gray-800">
          🌟 What Makes PSDA Special
        </p>
        <p className="text-center text-gray-600 text-2xl">
          Meet the dedicated professionals who guide our mission and support our
          young members every day.
        </p>
      </div>
    </div>
  );
}

export default Home;

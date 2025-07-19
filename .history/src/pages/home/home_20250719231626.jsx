import PrimaryCard from "../../components/cards/primary-card";
import HomePic from "../../components/homepic";
import psdaHighlights from "./psda-highlights";

function Home() {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <HomePic />
      <div className="flex  items-center justify-center">
        <div className="w-full flex flex-col m-5 space-y-6 max-w-screen-2xl">
          <p className="text-center text-4xl font-semibold text-gray-800">
            🌟 What Makes PSDA Special
          </p>
          <p className="text-center text-gray-600 text-2xl">
            At PSDA, we firmly believe that every child possesses unique talents
            and aspirations. Through our thoughtfully crafted programs, we are
            committed to nurturing individual growth, inspiring creativity, and
            fostering strong, lasting connections within the community.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {psdaHighlights.map((item) => (
          <PrimaryCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

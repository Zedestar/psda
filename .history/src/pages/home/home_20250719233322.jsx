import PrimaryCard from "../../components/cards/primary-card";
import TwoLinesCards from "../../components/cards/two-lines-card";
import HomePic from "../../components/homepic";
import psdaHighlights from "./psda-highlights";
import what_we_do_data from "./what-we-do";

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
      <div className="flex items-center justify-center my-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl">
          {psdaHighlights.map((item) => (
            <PrimaryCard item={item} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center my-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-2xl">
          {what_we_do_data.map((item) => (
            <TwoLinesCards item={item} />
          ))}
        </div>
      </div>
      <div
        className="h-[50%] flex flex-col items-center justify-center space-y-9 my-14"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(96, 165, 250, 0.7), rgba(34, 197, 94, 0.7))",
        }}
      >
        <p className="block w-full text-center text-5xl font-semibold text-gray-700">
          Inspired to Make a Difference with PSDA
        </p>
        <p className="block text-center text-2xl text-white w-[60%]">
          Be part of a passionate community where children and youth unlock
          their potential, lead meaningful projects, and shape a brighter future
          for all. With PSDA, your journey of growth, connection, and impact
          begins today.
        </p>
        <div>
          <button className="bg-green-400 p-4 mx-4 text-white text-2xl border border-white rounded-full hover:scale-105">
            Get started today{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

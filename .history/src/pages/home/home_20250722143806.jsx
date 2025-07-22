import PrimaryCard from "../../components/cards/primary-card";
import TwoLinesCards from "../../components/cards/two-lines-card";
import HomePic from "../../components/homepic";
import psdaHighlights from "./psda-highlights";
import what_we_do_data from "./what-we-do";
import FullRoundedButton from "../../components/button/full-rounded-button.jsx";
import what_makes_psda_special from "./what_makes_psda_special_data.js";
import FaceCard from "../../components/cards/face-card.jsx";
import GridOrganizerContainer from "../../components/gridOrganizerContainer/index.jsx";

function Home() {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <HomePic />
      <div className="flex  items-center justify-center my-14">
        {/* <div className="w-full flex flex-col m-5 space-y-6 max-w-screen-2xl">
          <p className="text-center text-4xl font-semibold text-gray-800">
            🌟 What Makes PSDA Special
          </p>
          <p className="text-center text-gray-600 text-2xl">
            At PSDA, we firmly believe that every child possesses unique talents
            and aspirations. Through our thoughtfully crafted programs, we are
            committed to nurturing individual growth, inspiring creativity, and
            fostering strong, lasting connections within the community.
          </p>
        </div> */}
        {what_makes_psda_special.map((item) => (
          <FaceCard item={item} />
        ))}
      </div>

      <GridOrganizerContainer>
        {psdaHighlights.map((item) => (
          <PrimaryCard item={item} />
        ))}
      </GridOrganizerContainer>

      <GridOrganizerContainer>
        {what_we_do_data.map((item) => (
          <TwoLinesCards item={item} />
        ))}
      </GridOrganizerContainer>

      <div
        className="h-[50%] flex flex-col items-center justify-center space-y-9 my-14"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(96, 165, 250, 0.7), rgba(34, 197, 94, 0.7))",
        }}
      >
        {/* <p className="block w-full text-center text-5xl font-semibold text-gray-700">
          Inspired to Make a Difference with PSDA
        </p>
        <p className="block text-center text-2xl text-white w-[60%]">
          Be part of a passionate community where children and youth unlock
          their potential, lead meaningful projects, and shape a brighter future
          for all. With PSDA, your journey of growth, connection, and impact
          begins today.
        </p> */}
        {mak}
        <div>
          <FullRoundedButton
            text={"Submit your idea"}
            bgColor={"bg-green-400"}
            textColor={"text-white"}
            onClick={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

import PrimaryCard from "../../components/cards/primary-card";
import TwoLinesCards from "../../components/cards/two-lines-card";
import HomePic from "../../components/homepic";
import psdaHighlights from "./psda-highlights";
import what_we_do_data from "./what-we-do";
import FullRoundedButton from "../../components/button/full-rounded-button.jsx";
import what_makes_psda_special from "./what_makes_psda_special_data.js";
import FaceCard from "../../components/cards/face-card.jsx";
import GridOrganizerContainer from "../../components/gridOrganizerContainer/index.jsx";
import make_difference_data from "./make_difference_data.js";
import Footer from "../../components/footer/footer.jsx";

function Home() {
  return (
    <div className="w-full h-full overflow-y-scroll">
      <HomePic />
      <div className="flex  items-center justify-center my-14">
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
        {make_difference_data.map((item) => (
          <FaceCard item={item} />
        ))}
        <div>
          <FullRoundedButton
            text={"Submit your idea"}
            bgColor={"bg-green-400"}
            textColor={"text-white"}
            onClick={null}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

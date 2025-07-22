import RectangularRoundedButton from "../button/rectangular-rounded-button";
import MinContianerInsideContent from "../min-container/min-container-inside-content";

function ContributionCard({ item }) {
  return (
    <div className="border flex flex-col justify-center mx-4 my-3 space-y-4 px-4 py-12 rounded-lg text-center max-w-lg hover:shadow-lg transition  bg-white">
      <div className="w-full flex items-center justify-center">
        <div
          className={`flex items-center justify-center rounded-full  w-20 h-20`}
        >
          {}
        </div>
      </div>

      <p className={`text-4xl `}>Am the title of this card</p>
      <p className="text-xl">
        hey there! am the content of the this page card, am glad you can read me{" "}
      </p>
      <MinContianerInsideContent>
        <RectangularRoundedButton
          text={"Learn About volunteering"}
          bgColor={"bg-slate-200"}
          hoverBgColor={"bg-rose-400"}
          hoverTextColor={"text-white"}
        />
      </MinContianerInsideContent>
    </div>
  );
}

export default ContributionCard;

import RectangularRoundedButton from "../button/rectangular-rounded-button";
import MinContianerInsideContent from "../min-container/min-container-inside-content";

function ContributionCard({ item }) {
  return (
    <div
      className={`border flex flex-col justify-center mx-1 my-1 space-y-1 py-6 px-4  rounded-lg text-center max-w-lg hover:shadow-lg transition ${item.cardBgColor}`}
    >
      <div className="w-full flex items-center justify-center">
        <div
          className={`flex items-center bg-blue-100 justify-center rounded-full  w-20 h-20`}
        >
          {item.icon}
        </div>
      </div>

      <p className="text-2xl font-bold text-gray-500">{item.title}</p>
      <p className="text-lg text-gray-500">{item.content}</p>
      <MinContianerInsideContent>
        <RectangularRoundedButton
          text={item.buttonText}
          textColor={"text-gray-700"}
          hoverTextColor={"text-white"}
          bgColor={"bg-slate-200"}
          hoverBgColor={"bg-blue-400"}
        />
      </MinContianerInsideContent>
    </div>
  );
}

export default ContributionCard;

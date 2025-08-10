import "./index.css";
import FullRoundedButton from "../button/full-rounded-button.jsx";

function HomePic() {
  return (
    <div
      className="h-[80%] flex flex-col items-center justify-center space-y-9"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(96, 165, 250, 0.7), rgba(34, 197, 94, 0.7)), url('/images/psdas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "line",
      }}
    >
      <p className="block w-full text-center text-4xl font-semibold text-gray-700">
        Pastor's Sons And Daughters Association For Bright Tomorrow
      </p>
      <p className="block w-full text-center text-2xl text-white">
        Join the PSDA community where children and youth unlock their potential,
        form meaningful connections, and drive positive change in their
        communities.
      </p>
      <div>
        <FullRoundedButton
          text={"Submit your idea"}
          bgColor={"bg-blue-400"}
          textColor={"text-white"}
          onClick={null}
        />
        <FullRoundedButton
          text={"Learn more"}
          bgColor={"bg-green-400"}
          textColor={"text-white"}
          onClick={null}
        />
      </div>
    </div>
  );
}

export default HomePic;

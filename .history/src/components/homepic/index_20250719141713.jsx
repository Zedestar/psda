// import psdasPic from "../../assets/images/psdas.jpg";
import "./index.css";

function HomePic() {
  return (
    <div
      className="h-[70%] flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(96, 165, 250, 0.7), rgba(34, 197, 94, 0.7)), url('/images/psdas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "line",
      }}
    >
      <p className="block w-full text-center text-5xl font-semibold">
        Pastor's Sons And Daughters Association For Bright Tomorrow
      </p>
      <p className="block w-full text-center text-2xl text-white">
        Join the PDDA community where children and youth unlock their potential,
        form meaningful connections, and drive positive change in their
        communities.
      </p>
      <div>
        <button className="bg-green-400 p-4 mx-4 text-white text-2xl border border-white rounded-full hover:scale-105">
          Join our community{" "}
        </button>
        <button className="bg-blue-400 p-4 m-4 text-white border border-white text-2xl rounded-full hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HomePic;

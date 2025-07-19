// import psdasPic from "../../assets/images/psdas.jpg";
import "./index.css";

function HomePic() {
  return (
    <div
      className="h-[70%] 
      "
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(96, 165, 250, 0.7), rgba(34, 197, 94, 0.7)), url('/images/psdas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "line",
      }}
    ></div>
  );
}

export default HomePic;

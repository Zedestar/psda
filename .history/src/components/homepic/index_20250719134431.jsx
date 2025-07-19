// import psdasPic from "../../assets/images/psdas.jpg";
import "./index.css";

function HomePic() {
  return (
    <div
      className="h-[70%] bg-gradient-to-br from-blue-400 to-green-500"
      style={{
        backgroundImage: "url('/images/psdas.jpg'), linear-gradient",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "line",
      }}
    ></div>
  );
}

export default HomePic;

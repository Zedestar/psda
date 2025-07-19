// import psdasPic from "../../assets/images/psdas.jpg";
import "./index.css";

function HomePic() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/psdas.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundColor: "line"
      }}
      className="h-[70%] bg-gradient-to-br from-blue-400 to-green-500"
    ></div>
  );
}

export default HomePic;

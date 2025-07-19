import psdasPic from "../../assets/images/psdas.jpg";
import "./index.css";

function HomePic() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${psdasPic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default HomePic;

import { useState } from "react";
import headerData from "./header-data";
import HeaderItem from "./header-item";
import psdaImage from "../../assets/images/psdaImage.png";

function Header() {
  const [active, setActive] = useState(1);
  return (
    <header className="flex items-center justify-between p-4 border-b-2 border-b-psdaGreen">
      <div className="text-3xl rounded-full overflow-hidden">
        <img className="h-12 w-12" src={psdaImage} alt="" />
      </div>{" "}
      <ul className="hidden lg:flex justify-center space-x-10 flex-center">
        {headerData.map((item) => (
          <HeaderItem
            key={item.id}
            item={item}
            active={active}
            setActive={setActive}
          />
        ))}
      </ul>
      <ul className="lg:hidden">
        <li>miaaa</li>
        <li>miaaa</li>
        <li>miaaa</li>
        <li>miaaa</li>
        <li>miaaa</li>
      </ul>
    </header>
  );
}

export default Header;

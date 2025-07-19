import { useState } from "react";
import headerData from "./header-data";
import HeaderItem from "./header-item";
import psdaImage from "../../assets/images/psdaImage.png";

function Header() {
  const [active, setActive] = useState(1);
  return (
    <div className="w-full flex justify-center shadow-lg">
      <header className="w-full flex items-center justify-between px-4  border-b border-b-gray-300 max-w-screen-2xl">
        <div className="text-3xl rounded-full overflow-hidden">
          <img className="h-12 w-12" src={psdaImage} alt="" />
        </div>{" "}
        <ul className="hidden lg:flex justify-center py-5 space-x-10 flex-center">
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
    </div>
  );
}

export default Header;

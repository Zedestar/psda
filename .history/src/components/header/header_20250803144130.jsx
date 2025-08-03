import { useContext, useEffect, useState } from "react";
import headerData from "./header-data";
import HeaderItem from "./header-item";
import psdaImage from "../../assets/images/psdaImage.png";
import { GlobalContext } from "../../context";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [active, setActive] = useState(() => {
    const activeTab = localStorage.getItem("activeTab");
    return activeTab ? JSON.parse(activeTab) : 1;
  });

  useEffect(() => {
    localStorage.setItem("activeTab", active);
  }, [active]);

  const { subHeader, setSubHeader } = useContext(GlobalContext);
  return (
    <div className="w-full shadow-lg bg-white">
      <div className="w-full flex justify-center">
        <header className="w-full flex items-center justify-between px-4  border-b border-b-gray-100 max-w-screen-2xl">
          <div className="text-3xl rounded-full overflow-hidden">
            <img className="h-20 w-20" src={psdaImage} alt="" />
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
          <div
            onClick={() => setSubHeader(!subHeader)}
            className="lg:hidden cursor-pointer bg-blue-600 p-2 rounded-md text-white"
          >
            {subHeader ? <FaTimes /> : <FaBars />}
          </div>
        </header>
      </div>
      {subHeader && (
        <ul className="lg:hidden flex flex-col items-center justify-center my-2 space-y-1">
          {headerData.map((item) => (
            <HeaderItem
              key={item.id}
              item={item}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Header;

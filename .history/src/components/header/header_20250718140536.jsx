import { useState } from "react";
import headerData from "./header-data";
import HeaderItem from "./header-item";

function Header() {
  const [active, setActive] = useState(0);
  return (
    <header className="flex items-center justify-between p-4">
      <div className="text-3xl">PSDA</div>{" "}
      <ul className="flex justify-center space-x-10 flex-center">
        {headerData.map((item) => (
          <HeaderItem key={item.id} item={item} />
        ))}
      </ul>
    </header>
  );
}

export default Header;

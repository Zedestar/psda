import headerData from "./header-data";

function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="text-3xl">PSDA</div>{" "}
      <ul className="flex justify-center space-x-10 flex-center">
        {headerData.map()}
      </ul>
    </header>
  );
}

export default Header;

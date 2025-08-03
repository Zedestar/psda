import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";

function HeaderItem({ item, active, setActive }) {
  const { setSubHeader } = useContext(GlobalContext);
  return (
    <li
      className={`p-1 rounded-md text-xl text-gray-600 font-gray-100 hover:bg-gray-200 transition cursor-pointer w-full ${
        item.id === active ? "bg-blue-500" : ""
      }`}
      onClick={() => {
        setActive(item.id);
        setSubHeader(false);
      }}
    >
      <Link to={item.link}>{item.content}</Link>
    </li>
  );
}

export default HeaderItem;

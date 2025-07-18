import { Link } from "react-router-dom";

function HeaderItem({ item, active, setActive }) {
  console.log(active);
  return (
    <li
      className={`p-1 rounded-md text-xl text-gray-600 font-gray-100 hover:bg-gray-200 transition cursor-pointer ${
        item.id === active ? "bg-blue-500" : ""
      }`}
      onClick={() => setActive(item.id)}
    >
      <Link to={item.link}>{item.content}</Link>
    </li>
  );
}

export default HeaderItem;

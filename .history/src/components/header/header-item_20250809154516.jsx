import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { useContext } from "react";

function HeaderItem({ item, active, setActive }) {
  const { setSubHeader } = useContext(GlobalContext);
  return (
    <Link to={item.link}>
      <li
        onClick={() => {
          setActive(item.id);
          setSubHeader(false);
        }}
      >
        {item.content}
      </li>
    </Link>
  );
}

export default HeaderItem;

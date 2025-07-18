function HeaderItem({ item, active, setActive }) {
  return (
    <li
      className="p-1 hover:bg-gray-400 cursor-pointer"
      onClick={() => setActive()}
    >
      {item.content}
    </li>
  );
}

export default HeaderItem;

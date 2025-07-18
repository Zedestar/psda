function HeaderItem({ item, active, setActive }) {
  console.log(active);
  return (
    <li
      className={`p-1 hover:bg-gray-400 cursor-pointer ${
        item.id === active ? "bg-blue-400" : ""
      }`}
      onClick={() => setActive(item.id)}
    >
      {item.content}
    </li>
  );
}

export default HeaderItem;

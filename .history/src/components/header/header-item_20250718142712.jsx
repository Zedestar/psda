function HeaderItem({ item, active, setActive }) {
  console.log(active);
  return (
    <li
      className={`p-1 text-xl font-gray-100 hover:bg-gray-400 cursor-pointer ${
        item.id === active ? "bg-blue-500" : ""
      }`}
      onClick={() => setActive(item.id)}
    >
      {item.content}
    </li>
  );
}

export default HeaderItem;

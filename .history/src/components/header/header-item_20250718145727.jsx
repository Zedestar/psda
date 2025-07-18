function HeaderItem({ item, active, setActive }) {
  console.log(active);
  return (
    <li
      className={`p-1 rounded-md text-xl text-red-100 font-gray-100 hover:bg-gray-200 transition cursor-pointer ${
        item.id === active ? "bg-blue-500" : ""
      }`}
      onClick={() => setActive(item.id)}
    >
      {item.content}
    </li>
  );
}

export default HeaderItem;

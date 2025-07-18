function HeaderItem({ item }) {
  return (
    <li className="p-2  hover:bg-gray-400 cursor-pointer">{item.content}</li>
  );
}

export default HeaderItem;

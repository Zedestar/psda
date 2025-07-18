function HeaderItem({ item }) {
  return (
    <li className="p-1 hover:bg-gray-400 cursor-pointer">{item.content}</li>
  );
}

export default HeaderItem;

import { AiOutlineUsergroupAdd } from "react-icons/ai";

function ContactActionItem() {
  return (
    <li className="flex flex-row items-start space-x-2 p-3 rounded-lg border border-gray-200">
      <div className="w-[20%] bg-blue-100 p-2 rounded-md flex items-center justify-center">
        <AiOutlineUsergroupAdd className="text-blue-500 text-xl" />
      </div>
      <div className="space-y-1">
        <p className="font-bold">Contact Us</p>
        <p className="text-sm">
          Have questions or need assistance? Reach out to us directly.
        </p>
        <button className="p-1 text-sm hover:bg-blue-500 hover:text-white rounded-lg border border-gray=200 transiton-all duration-300">
          Register Now
        </button>
      </div>
    </li>
  );
}

export default ContactActionItem;

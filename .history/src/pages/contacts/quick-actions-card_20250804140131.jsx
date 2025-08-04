import { AiOutlineUser } from "react-icons/ai";
import RectangularRoundedButton from "../../components/button/rectangular-rounded-button";

function QuickActionsCard() {
  return (
    <ul className="bg-white border border-gray-200 shadow-sm p-4 rounded-lg hover:shadow-xl transition-all duration-300 space-y-2 text-gray-600">
      <h1 className="text-xl font-bold">Quick Actions</h1>

      <li className="flex flex-row items-start space-x-2">
        <div className="w-[20%] bg-blue-100 p-2 rounded-md flex items-center justify-center">
          <AiOutlineUser className="text-blue-500 text-xl" />
        </div>
        <div>
          <p className="font-bold">Contact Us</p>
          <p className="text-sm">
            Have questions or need assistance? Reach out to us directly.
          </p>
          <Button className="p-2"></Button>
        </div>
      </li>
    </ul>
  );
}

export default QuickActionsCard;

import {
  AiOutlineTeam,
  AiOutlineHeart,
  AiOutlineApartment,
} from "react-icons/ai";
import { FaEnvelopeOpenText, FaRegEnvelope } from "react-icons/fa";

const contactData = [
  {
    id: 1,
    icon: <FaEnvelopeOpenText className="text-4xl text-blue-500 " />,
    title: "Email Us",
    content: "Share your skills and passion with our community members.",
    buttonText: "Learn About Volunteering",
    cardBgColor: "bg-gray-200",
  },
  {
    id: 2,
    icon: <AiOutlineHeart className="text-4xl text-blue-500" />,
    title: "Call Us",
    content: "Help us reach more families by sharing our mission.",
    buttonText: "Share Our Story",
    cardBgColor: "bg-gray-200",
  },
  {
    id: 3,
    icon: <AiOutlineApartment className="text-4xl text-blue-500" />,
    title: "Visit Us",
    content: "Partner with us for employee engagement and community impact.",
    buttonText: "Explore Partnership",
    cardBgColor: "bg-gray-200",
  },
];

export default contactData;

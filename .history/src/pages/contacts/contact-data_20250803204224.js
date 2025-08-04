import { FaEnvelope, FaPhone, FaPhoneAlt } from "react-icons/fa";

const contactData = [
  {
    id: 1,
    icon: <FaEnvelope className="text-4xl text-blue-400 " />,
    title: "Email Us",
    content: "Share your skills and passion with our community members.",
    buttonText: "Learn About Volunteering",
    cardBgColor: "bg-gray-200",
  },
  {
    id: 2,
    icon: <FaPhoneAlt className="text-4xl text-blue-500" />,
    title: "Call Us",
    content: "Help us reach more families by sharing our mission.",
    buttonText: "Share Our Story",
    cardBgColor: "bg-gray-200",
  },
  {
    id: 3,
    icon: <FaPhone className="text-4xl text-blue-500" />,
    title: "Visit Us",
    content: "Partner with us for employee engagement and community impact.",
    buttonText: "Explore Partnership",
    cardBgColor: "bg-gray-200",
  },
];

export default contactData;

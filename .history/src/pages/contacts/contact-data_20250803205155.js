import { AiOutlineAim, AiOutlineMessage, AiOutlinePhone } from "react-icons/ai";

const contactData = [
  {
    id: 1,
    icon: <AiOutlineMessage className="text-4xl text-blue-400 " />,
    title: "Email Us",
    subTitle: "info@psda.org",
    content: "Send us an email and we'll respond within 24 hours",
    buttonText: "Send Email",
    cardBgColor: "bg-gray-200",
  },
  {
    id: 2,
    icon: <AiOutlinePhone className="text-4xl text-blue-500" />,
    title: "Call Us",
    content: "Speak with our team Monday-Friday, 9 AM - 5 PM",
    buttonText: "Call Now",
    cardBgColor: "bg-gray-200",
  },
  {
    id: 3,
    icon: <AiOutlineAim className="text-4xl text-blue-500" />,
    title: "Visit Us",
    content: "Partner with us for employee engagement and community impact.",
    buttonText: "Explore Partnership",
    cardBgColor: "bg-gray-200",
  },
];

export default contactData;

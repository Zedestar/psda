import {
  FaTiktok,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const followUsData = [
  {
    id: 1,
    IconBase: <FaTiktok className="text-blue-400" />,
    name: "TikTok",
    link: "https://www.tiktok.com/@psda_org",
  },
  {
    id: 2,
    IconBase: <FaFacebookF className="text-blue-400" />,
    name: "Facebook",
    link: "https://www.facebook.com/psda_org",
  },
  {
    id: 3,
    IconBase: <FaWhatsapp className="text-blue-400" />,
    name: "WhatsApp",
    link: "https://wa.me/+255672743515",
  },
  {
    id: 4,
    IconBase: <FaTwitter className="text-blue-400" />,
    name: "Twitter",
    link: "https://twitter.com/psda_org",
  },
  {
    id: 5,
    IconBase: <FaInstagram className="text-blue-400" />,
    name: "Instagram",
    link: "https://www.instagram.com/psda_org",
  },
];

export default followUsData;

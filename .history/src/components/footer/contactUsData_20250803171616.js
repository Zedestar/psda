import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const contactInfoData = [
  {
    id: 1,
    icon: <FaEnvelope className="text-blue-400" />,
    label: "info@psda.org",
    link: "mailto:info@psda.org",
  },
  {
    id: 2,
    icon: <FaPhoneAlt className="text-blue-400" />,
    label: "+255 784 584 231",
    link: "tel:+255784584231",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt className="text-blue-400" />,
    label: "123 Morogoro Manzese",
    link: null, // could add Google Maps if desired
  },
];

export default contactInfoData;

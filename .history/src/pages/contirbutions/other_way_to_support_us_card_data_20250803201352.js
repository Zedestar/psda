import {
  AiOutlineTeam,
  AiOutlineHeart,
  AiOutlineApartment,
  //   AiOutlineBulb,
  //   AiOutlineTool,
  //   AiOutlineStar,
  //   AiOutlineGift,
} from "react-icons/ai";

const other_way_to_support_us_card_data = [
  {
    id: 1,
    icon: <AiOutlineTeam className="text-4xl text-blue-500 " />,
    title: "Volunteer Your Time",
    content: "Share your skills and passion with our community members.",
    buttonText: "Learn About Volunteering",
    cardBgColor: "bg-gray-100",
  },
  {
    id: 2,
    icon: <AiOutlineHeart className="text-4xl text-blue-500" />,
    title: "Spread the Word",
    content: "Help us reach more families by sharing our mission.",
    buttonText: "Share Our Story",
    cardBgColor: "bg-transparent",
  },
  {
    id: 3,
    icon: <AiOutlineApartment className="text-4xl text-blue-500" />,
    title: "Corporate Partnership",
    content: "Partner with us for employee engagement and community impact.",
    buttonText: "Explore Partnership",
    cardBgColor: "bg-transparent",
  },
];

export default other_way_to_support_us_card_data;

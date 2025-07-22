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
    title: "Title text",
    content: "The content data",
    buttonText: "Learn About Volunteering",
  },
  {
    id: 2,
    icon: <AiOutlineHeart className="text-4xl text-blue-500" />,
    title: "Spread the Word",
    content: "Help us reach more families by sharing our mission.",
    buttonText: "Share Our Story",
  },
  {
    id: 3,
    icon: <AiOutlineApartment className="text-4xl text-blue-500" />,
    title: "Corporate Partnership",
    content: "Partner with us for employee engagement and community impact.",
    buttonText: "Explore Partnership",
  },
];

export default other_way_to_support_us_card_data;

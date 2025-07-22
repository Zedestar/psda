import {
  AiOutlineTeam,
  AiOutlineBulb,
  AiOutlineTool,
  AiOutlineStar,
  AiOutlineGift,
} from "react-icons/ai";

const core_objectives_data = [
  {
    id: 1,
    title: "Fellowship and Networking",
    content:
      "To foster strong, lasting relationships among pastors' children by encouraging unity, love, and mutual support within the community.",
    icon: <AiOutlineTeam className="text-3xl text-teal-500" />,
    color: "bg-teal-50",
    text_color: "text-teal-500",
  },
  {
    id: 2,
    title: "Opportunity Awareness",
    content:
      "To actively seek out and share opportunities for growth, development, and advancement—both spiritually and economically.",
    icon: <AiOutlineBulb className="text-3xl text-purple-500" />,
    color: "bg-purple-50",
    text_color: "text-purple-500",
  },
  {
    id: 3,
    title: "Problem Solving",
    content:
      "To openly discuss and confront common challenges we face as a community, and work hand in hand to find sustainable solutions.",
    icon: <AiOutlineTool className="text-3xl text-yellow-500" />,
    color: "bg-yellow-50",
    text_color: "text-yellow-500",
  },
  {
    id: 4,
    title: "Talent Discovery & Development",
    content:
      "To identify, nurture, and empower the God-given talents within us, enabling every member to reach their full potential.",
    icon: <AiOutlineStar className="text-3xl text-pink-500" />,
    color: "bg-pink-50",
    text_color: "text-pink-500",
  },
  {
    id: 5,
    title: "Support for Our Parents",
    content:
      "To express gratitude and honor our pastoral parents by supporting them in practical ways—spiritually, emotionally, and materially.",
    icon: <AiOutlineGift className="text-3xl text-red-500" />,
    color: "bg-red-50",
    text_color: "text-red-500",
  },
];

export default core_objectives_data;

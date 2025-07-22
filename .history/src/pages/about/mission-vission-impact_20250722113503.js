import { AiOutlineAim, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

const mission_vission_impact_data = [
  {
    id: 1,
    title: "Our mission",
    content:
      "We envision a generation of spiritually grounded, socially responsible, and purpose-driven leaders from pastoral families who carry forward a legacy of faith, compassion, and community influence.",

    icon: <AiOutlineAim className="text-3xl text-green-500" />,
    color: "bg-green-50",
    text_color: "text-green-500",
  },
  {
    id: 2,
    title: "Our vision",
    content:
      "We exist to empower pastors’ children through mentorship, discipleship, skill-building, and fellowship—equipping them to thrive in every area of life and fulfill their divine calling.",
    icon: <AiOutlineEye className="text-4xl text-blue-500" />,
    color: "bg-blue-50",
    text_color: "text-blue-500",
  },
  {
    id: 3,
    title: "Our impact",
    content:
      "Through impactful programs and community-building initiatives, P.S.D.A. is restoring identity, building leadership, and inspiring pastors’ children to walk boldly in purpose while honoring their heritage.",
    icon: <AiOutlineHeart className="text-4xl text-orange-400" />,
    color: "bg-orange-50",
    text_color: "text-orange-500",
  },
];

export default mission_vission_impact_data;

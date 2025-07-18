import { AiOutlineAim, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

const mission_vission_impact_data = [
  {
    id: 1,
    title: "Our mission",
    content:
      "To raise a generation of spiritually grounded, socially responsible, and purpose-driven leaders emerging from pastoral families—young men and women who embody integrity, lead with compassion, influence their communities positively, and carry forward a legacy of faith and service with excellence.",

    icon: <AiOutlineAim className="text-4xl text-green-500" />,
    color: "bg-green-50",
  },
  {
    id: 2,
    title: "Our vision",
    content:
      "To empower, connect, and support pastors’ sons and daughters through intentional mentorship, Christ-centered discipleship, practical skill-building, and deep, authentic fellowship. Our mission is to create a nurturing space where they can grow holistically—spiritually, emotionally, mentally, and economically—equipping them to live out their God-given purpose with confidence and impact.",
    icon: <AiOutlineEye className="text-4xl text-blue-500" />,
    color: "bg-blue-50",
  },
  {
    id: 3,
    title: "Our impact",
    content:
      "To raise a generation of spiritually grounded, socially responsible, and purpose-driven leaders from pastoral families.",
    icon: <AiOutlineHeart className="text-4xl text-orange-400" />,
    color: "bg-orange-50",
  },
];

export default mission_vission_impact_data;

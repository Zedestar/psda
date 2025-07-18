import { AiOutlineAim, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

const mission_vission_impact_data = [
  {
    id: 1,
    title: "Our mission",
    content:
      "We envision a generation of spiritually grounded, socially responsible, and purpose-driven leaders from pastoral families who carry forward a legacy of faith, compassion, and community influence.",

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
      "Through dynamic gatherings, transformative outreach programs, leadership training, and personal development initiatives, P.S.D.A. is reshaping futures. We are restoring confidence, building identity, and inspiring the next generation of leaders to walk boldly in their calling, serve with excellence, and honor the sacrifices and legacy of their parents in ministry.",
    icon: <AiOutlineHeart className="text-4xl text-orange-400" />,
    color: "bg-orange-50",
  },
];

export default mission_vission_impact_data;

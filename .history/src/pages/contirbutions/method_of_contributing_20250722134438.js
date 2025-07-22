import {
  AiOutlineReconciliation,
  //   AiOutlineBulb,
  //   AiOutlineTool,
  //   AiOutlineStar,
  //   AiOutlineGift,
} from "react-icons/ai";

const method_of_contributing = [
  {
    id: 1,
    icon: <AiOutlineReconciliation />,
    title: "Online Donation",
    content: "Secure online payments via credit card or PayPal",
    buttonText: "Donate Now",
    cardBgColor: "bg-white",
  },
  {
    id: 2,
    title: "Mobile Money",
    content: "M-Pesa, Airtel Money, Mixx By Yas, Halo-Pesa",
    buttonText: "Donate Now",
    cardBgColor: "bg-white",
  },
  {
    id: 3,
    title: "Bank Transfer",
    content: "Direct bank transfer to our community account",
    buttonText: "Donate Now",
    cardBgColor: "bg-white",
  },
];

export default method_of_contributing;

//  id: 1,
//     icon: <AiOutlineTeam className="text-4xl text-blue-500 " />,
//     title: "Volunteer Your Time",
//     content: "Share your skills and passion with our community members.",
//     buttonText: "Learn About Volunteering",
//     cardBgColor: "bg-transparent",

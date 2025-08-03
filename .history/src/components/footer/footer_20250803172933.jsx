import followUsData from "./followUsData";
import contactInfoData from "./contactUsData";
import headerData from "../header/header-data";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full flex flex-col space-y-4 py-2 px-6">
      <div className="grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-4 my-3 gap-4">
        <div>
          <p className="font-bold text-lg">PSDA</p>
          <p>
            Empowering children and youth to create positive change in their
            communities through education, collaboration, and meaningful
            projects
          </p>
        </div>
        <div>
          <p className="font-bold text-lg">Quick Link</p>
          <ul className="space-y-1">
            {headerData.map((item) => (
              <li key={item.id} className="hover:underline">
                <Link to={item.link} onClick={() => }>
                  {item.content}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg">Contact</p>
          <ul className="space-y-1">
            {contactInfoData.map((item) => (
              <li key={item.id} className="flex items-center space-x-2">
                {item.icon}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg">Follow us</p>
          <ul className="space-y-1">
            {followUsData.map((item) => (
              <li key={item.id} className="flex items-center space-x-2">
                {item.IconBase}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="bg-blue-500"></hr>
      <div className="flex justify-between items-center">
        <div> PSDA Community. All rights reserved</div>
        <div>Privacy policy Term of service</div>
      </div>
    </div>
  );
}

export default Footer;

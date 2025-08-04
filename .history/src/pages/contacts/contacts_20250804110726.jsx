import { AiOutlineClockCircle } from "react-icons/ai";
import ContactCard from "../../components/cards/contact-card";
import FaceCard from "../../components/cards/face-card";
import Container from "../../components/container";
import Footer from "../../components/footer/footer";
import GridOrganizerContainer from "../../components/gridOrganizerContainer";
import TwoSlotContainer from "../../components/twoSlotContainer/two-slot-container";
import contactData from "./contact-data";
import stayInTouchData from "./stayInTouchData";

function Contacts() {
  return (
    <Container>
      {stayInTouchData.map((item) => (
        <FaceCard item={item} />
      ))}

      <GridOrganizerContainer>
        {contactData.map((item) => (
          <ContactCard item={item} key={item.id} />
        ))}
      </GridOrganizerContainer>

      <TwoSlotContainer
        firstSlot={<div>Hey there, am the second slot</div>}
        secondSlot={
          <div className="flex flex-col gap-4">
            <ul className="bg-white border border-gray-200 shadow-lg p-4 rounded-md space-y-2">
              <li className="flex items-center justify-start space-x-2">
                <AiOutlineClockCircle className="text-xl text-blue-400 font-bold" />
                <p className="font-bold">Office Hours</p>
              </li>
              <li className="flex flex-row items-center justify-between">
                <p className="text-gray-500 text-sm md:text-md">
                  Monday-Friday
                </p>
                <p className="font-bold text-sm md:text-md text-gray-600">
                  9:00 AM - 5:00 PM
                </p>
              </li>
              <li className="flex flex-row items-center justify-between">
                <p className="text-gray-500 text-sm md:text-md">Saturday</p>
                <p className="font-bold text-sm md:text-md text-gray-600">
                  10:00 AM - 3:00 PM
                </p>
              </li>
              <li className="flex flex-row items-center justify-between">
                <p className="text-gray-500 text-sm md:text-md">Sunday</p>
                <p className="font-bold text-sm md:text-md text-gray-600">
                  Closed
                </p>
              </li>
              <div className="flex flex-row bg-rose-200 p-2">
                <strong>Note:</strong>{" "}
                <p>
                  We respond to emails and voicemails within 24 hours during
                  business days
                </p>
              </div>
            </ul>
          </div>
        }
      />

      <Footer />
    </Container>
  );
}

export default Contacts;

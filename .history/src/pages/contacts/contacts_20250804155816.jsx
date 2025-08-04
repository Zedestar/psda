import ContactCard from "../../components/cards/contact-card";
import FaceCard from "../../components/cards/face-card";
import Container from "../../components/container";
import Footer from "../../components/footer/footer";
import GridOrganizerContainer from "../../components/gridOrganizerContainer";
import TwoSlotContainer from "../../components/twoSlotContainer/two-slot-container";
import contactData from "./contact-data";
import stayInTouchData from "./stayInTouchData";
import OfficeHours from "./office-hours";
import QuickActionsCard from "./quick-actions-card";
import FindUs from "./find-us";
import { FaRegCommentAlt } from "react-icons/fa";

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
        firstSlot={
          <div className="text-gray-500">
            <div className="flex flex-row items-center space-x-2 justify-center">
              <FaRegCommentAlt className="text-3xl text-blue-500" />
              <p className="text-3xl text-gray-600 font-medium">
                Leave us a message
              </p>
            </div>
            <form>
              <div className="flex flex-col space-y-4 mt-4">
                <label className="text-sm text-gray-600">Your Name</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600">Your Email</label>
                <input
                  type="email"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  rows="4"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        }
        secondSlot={
          <div className="flex flex-col gap-4">
            <OfficeHours />
            <QuickActionsCard />
            <FindUs />
          </div>
        }
      />

      <Footer />
    </Container>
  );
}

export default Contacts;

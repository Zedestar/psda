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
import FormTextInput from "../../components/textInput";
import FormGridOrganizer from "../../components/formGridOrganizer";

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
            <form className="space-y-4 mt-6">
              <FormGridOrganizer>
                <FormTextInput
                  label={"First Name"}
                  placeholder={"Enter your first name"}
                />
                <FormTextInput
                  label={"Second Name"}
                  placeholder={"Enter your second name"}
                />
              </FormGridOrganizer>
              <FormGridOrganizer>
                <FormTextInput
                  label={"Phone Number"}
                  placeholder={"Enter your phone number"}
                />
                <FormTextInput
                  label={"Email"}
                  placeholder={"Enter your email"}
                />
              </FormGridOrganizer>
              <FormTextInput
                label={"Subject"}
                placeholder={"Enter the subject of your message"}
              />
              <textarea
                label={"Message"}
                placeholder={"Type your message here..."}
                type="textarea"
                row={4}
              />
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

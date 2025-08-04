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
          <div>
            <p>I am the first slot</p>
            <div>
              <p>I will be having the form for contacting to psda</p>
            </div>
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

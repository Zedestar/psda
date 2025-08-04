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
            <div>
              <p>hey there I am the firt div of the first slot</p>
            </div>
          </div>
        }
      />

      <Footer />
    </Container>
  );
}

export default Contacts;

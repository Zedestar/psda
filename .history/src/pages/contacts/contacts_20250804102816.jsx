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

      <TwoSlotContainer>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us!</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Stay Connected</h3>
          <p>Follow us on our social media channels for updates.</p>
        </div>
      </TwoSlotContainer>

      <Footer />
    </Container>
  );
}

export default Contacts;

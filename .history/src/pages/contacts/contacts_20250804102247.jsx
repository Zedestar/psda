import ContactCard from "../../components/cards/contact-card";
import FaceCard from "../../components/cards/face-card";
import Container from "../../components/container";
import Footer from "../../components/footer/footer";
import GridOrganizerContainer from "../../components/gridOrganizerContainer";
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

      <Footer />
    </Container>
  );
}

export default Contacts;

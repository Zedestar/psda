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

      <div className="flex flex-col md:flex-row justify-between p-5 gap-2 bg-rose-300 w-full">
        <div className="bg-white md:w-2/3 h-screen"> content one</div>

        <div className="bg-white md:w-1/3"> content two</div>
      </div>

      <Footer />
    </Container>
  );
}

export default Contacts;

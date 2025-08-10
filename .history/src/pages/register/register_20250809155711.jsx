import { FaRegCommentAlt } from "react-icons/fa";
import Container from "../../components/container";
import Footer from "../../components/footer/footer";
import TwoSlotContainer from "../../components/twoSlotContainer/two-slot-container";

function Register() {
  return (
    <Container>
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
              <FormTextArea
                label={"Message"}
                placeholder={"Type your message here..."}
                rows={4}
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                <p>Send Message</p> <FaRegPaperPlane />
              </button>
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

export default Register;

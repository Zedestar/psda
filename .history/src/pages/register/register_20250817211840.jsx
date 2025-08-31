import { FaRegCommentAlt, FaRegPaperPlane } from "react-icons/fa";
import Container from "../../components/container";
import Footer from "../../components/footer/footer";
import TwoSlotContainer from "../../components/twoSlotContainer/two-slot-container";
import FormGridOrganizer from "../../components/formGridOrganizer";
import FormTextInput from "../../components/textInput";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
// import FormTextArea from "../../components/textInput/textArea";

function Register() {
  const [registered, setRegistered] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { loading, error, data }] = useMutation(
    gql`
      mutation ($username: String!, $password: String!) {
        tokenAuth(username: $username, password: $password) {
          token
          payload
        }
      }
    `,
    {
      variables: {
        username: username,
        password: password,
      },
    }
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (registered) {
      loginUser();
      console.log(loginUser());
    } else {
      console.log("This is signing up logic");
    }

    console.log("Form submitted");
  }

  return (
    <Container>
      <TwoSlotContainer
        firstSlot={
          <div className="text-gray-500">
            <div className="flex flex-row items-center space-x-2 justify-center">
              <FaRegCommentAlt className="text-3xl text-blue-500" />
              <p className="text-3xl text-gray-600 font-medium">
                {registered
                  ? "Welcome back to our community!"
                  : "Join Our Community"}
              </p>
            </div>
            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              {registered ? (
                <>
                  {error && <p className="text-red-500">{error.message}</p>}
                  {loading && <p className="text-blue-500">Loading...</p>}
                  <div>
                    <FormTextInput
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      label={"Username"}
                      placeholder={"Enter your username"}
                    />
                    <FormTextInput
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      label={"Password"}
                      type="password"
                      placeholder={"Enter your password"}
                    />
                  </div>
                </>
              ) : (
                <div>
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
                    label={"Father Full name"}
                    placeholder={"Enter your father full name of your message"}
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                {registered ? (
                  <p>Login</p>
                ) : (
                  <>
                    <p>Register</p> <FaRegPaperPlane />
                  </>
                )}
              </button>
              <div
                className="w-full m-2 flex items-center justify-center cursor-pointer text-blue-600"
                onClick={() => setRegistered(!registered)}
              >
                {registered
                  ? "Don't have an account? Register"
                  : "Have an account? Login"}
              </div>
            </form>
          </div>
        }
        secondSlot={
          <div className="flex flex-col gap-4">
            {/* <OfficeHours />
            <QuickActionsCard />
            <FindUs /> */}
          </div>
        }
      />
      <Footer />
    </Container>
  );
}

export default Register;

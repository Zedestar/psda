import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalState, { GlobalContext } from "./context";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import UserMode from "./UserMode";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/",
  cache: new InMemoryCache(),
});

const AppWrapper = () => {
  const { userMode } = useContext(GlobalContext);
  return userMode ? <App /> : <UserMode />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalState>
          <AppWrapper />
        </GlobalState>
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
);

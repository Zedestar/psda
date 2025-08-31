import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) =>
      console.error(`GraphQL error: ${message}`)
    );
  }
  if (networkError) {
    console.error(`Network error: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: "http://127.0.0.1:8000/graphql/", // ✅ match your Django endpoint
  // credentials: "include",               // only if you later use cookies/JWT-in-cookie
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]), // ✅ now errorLink is active
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalState>
          <App />
        </GlobalState>
      </React.StrictMode>
    </BrowserRouter>
  </ApolloProvider>
);

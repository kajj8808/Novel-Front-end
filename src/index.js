import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App";


import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./apollo";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

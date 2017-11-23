import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from "react-apollo";

const networkInterface = createNetworkInterface({
  uri: "https://98lq7vz8r.lp.gql.zone/graphql"
});
const client = new ApolloClient({
  networkInterface: networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();

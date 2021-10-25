import {ApolloClient , InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://1.226.58.251:4000",
});

export default client;


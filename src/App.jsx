import React from "react";
import "./app.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";
import ProductsList from "./components/ProductsList";

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000' }),
  cache: new InMemoryCache({
    addTypename:false
  }),
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="">
        <ProductsList />
      </div>
    </ApolloProvider>
  );
}

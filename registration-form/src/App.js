import logo from "./logo.svg";
import "./App.css";

/*Components*/

import NavBar from "./components/NavBar";
import AddDetails from "./components/AddDetails";
import AllDetails from "./components/AllDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      {/* Add ApolloProvider here */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Add" element={<AddDetails />} />
          <Route path="/All" element={<AllDetails />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

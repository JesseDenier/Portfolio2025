// Imports React library
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Imports Apollo libraries for GraphQL integration
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// Imports the Tailwind created CSS file for styling
import "./output.css";

// Imports the main App component which works with the router
import App from "./App";

// Imports the pages the router will use to conditionally show the appropriate views
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Bingo2025Page from "./pages/Bingo2025Page";

// Defines the accessible routes and the components to render for each path
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/bingo2025",
        element: <Bingo2025Page />,
      },
    ],
  },
]);

// Initialize Apollo Client for GraphQL queries and mutations
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// Renders the RouterProvider component wrapped in an ApolloProvider to the HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);

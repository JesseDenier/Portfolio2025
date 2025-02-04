// Imports React library
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

// Imports the Tailwind created CSS file for styling
import "./output.css";

// Imports custom header component
import Header from "./components/Header";

// Imports ScrollToTop component
import ScrollToTop from "./utils/scrollToTop";

// Functional component App
const App = () => {
  const location = useLocation();

  // List of routes where the Header should be hidden
  const hideHeaderRoutes = ["/bingo2025"];

  return (
    <>
      {/* Conditionally render the Header */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      {/* ScrollToTop ensures that every route change scrolls to the top */}
      <ScrollToTop />

      {/* Outlet renders matched child routes */}
      <Outlet />
    </>
  );
};

// Exports the App component as the default export
export default App;

// Imports React library
import React from "react";
import { Link } from "react-router-dom";

//! Update styling of ErrorPage.

// ErrorPage Component: Displays an error message and a link to navigate back to the home page
const ErrorPage = ({ data }) => {
  // Checks if the component is rendered within an iframe
  const isIframe = window.self !== window.top;

  // If inside an iframe, display error message with no links
  if (isIframe) {
    return (
      <main className="flex items-center justify-center min-h-screen border-2">
        {/* Container for the error message */}
        <div className="w-full max-w-md">
          <div className="shadow-md rounded-lg p-6">
            <h4 className="text-2xl font-semibold mb-6 text-center">Error</h4>
            <div className="card-body">
              <p className="text-center">Something went wrong.</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="flex items-center justify-center min-h-screen">
      {/* Container for the error message */}
      <div className="w-full max-w-md">
        <div className="shadow-md rounded-lg p-6">
          <h4 className="text-2xl font-semibold mb-6 text-center">Error</h4>
          <div className="card-body">
            <div className="mb-6">
              <p className="text-center">Something went wrong.</p>
            </div>
            {/* Link to navigate back to the home page */}
            <div className="flex justify-center">
              <Link
                to="/"
                className="text-center w-1/2 font-bold py-2 px-4 rounded shadow-md"
              >
                Go Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;

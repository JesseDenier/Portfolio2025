// Import necessary modules
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import path from "path";
import { fileURLToPath } from "url";
import { typeDefs, resolvers } from "./schemas/index.js";
import cookieParser from "cookie-parser";

// Set __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the server port, defaulting to 3001 if not set in environment variables
const PORT = process.env.PORT || 3001;

// Initialize an Express application
const app = express();

// CORS Configuration
const corsOptions = {
  origin: "https://jessedenier.com", // Ensure this matches your frontend URL exactly
  //! Confirm this doesn't cause errors before updating site.
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: true, // If you need to allow credentials like cookies
  optionsSuccessStatus: 200, // Response status for successful OPTIONS requests
};

app.use(cors(corsOptions)); // Apply CORS middleware

app.use(express.json()); // Middleware to parse JSON request body
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded request body
app.use(cookieParser()); // Middleware to parse cookies

// Create a new instance of ApolloServer with the provided type definitions and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, user: req.user }),
});

// Async function to start the Apollo server
const startApolloServer = async () => {
  // Start the Apollo server
  await server.start();
  // Middleware to handle GraphQL requests
  app.use("/graphql", expressMiddleware(server, {}));
  // Serve static files from the dist directory
  app.use(express.static(path.join(__dirname, "../client/dist")));
  // Wildcard route to serve the index.html file for SPA routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();

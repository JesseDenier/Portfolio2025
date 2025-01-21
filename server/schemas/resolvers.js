// Importing and loading dotenv for environment variables from a .env file into process.env
import dotenv from "dotenv";
dotenv.config();

const resolvers = {
  Query: {
    hello: () => "Hello, world!", // Resolver for the placeholder query
  },
};

export default resolvers;

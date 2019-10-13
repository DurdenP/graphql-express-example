import { resolvers } from './../resolvers/resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Book {
        id: ID
        title: String
        description: String
        genre: String
        language: String
        authors: [Author]
    }

    type Author {
        firstName: String
        lastName: String
    }

    type Query {
        getBook(id: ID): Book
        getBooks: [Book]
    }

    input BookInput {
        id: ID
        title: String!
        description: String
        genre: String
        language: String
        authors: [AuthorInput]
    }

    input AuthorInput {
        firstName: String
        lastName: String 
    }

    type Mutation {
        addBook(input: BookInput): Book
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers});

export { schema };

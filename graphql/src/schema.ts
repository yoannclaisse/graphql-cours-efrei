export const typeDefs = `#graphql
type Book {
  author: String!
  title: String!
}

input BookInput {
  author: String!
  title: String!
}

type BookPayload {
  author: String!
  title: String!
}

type Mutation {
  addBook(input: BookInput!): BookPayload!
  deleteBook(id: ID!): BookPayload!
}

type Query {
  books: [Book]!
}`;
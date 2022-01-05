import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Post {
    id: String
    title: String
    body: String
    createdAt: String
    updatedAt: String
    tags: [Tag]
  }

  type Tag {
    id: String
    name: String
    colorCode: String
    posts: [Post]
  }

  type Query {
    posts: [Post]
    tags: [Tag]
  }
`;

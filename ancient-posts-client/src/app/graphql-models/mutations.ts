import { gql } from 'apollo-angular';

export const CREATE_POST_MUTATION = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export const UPDATE_POST_MUTATION = gql`
  mutation ($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

export const DELETE_POST_MUTATION = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;

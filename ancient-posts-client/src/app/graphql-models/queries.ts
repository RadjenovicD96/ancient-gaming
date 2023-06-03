import { gql } from 'apollo-angular';

export const ALL_POSTS_QUERY = gql`
  query posts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

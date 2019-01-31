import gql from 'graphql-tag';

export const FLOW_QUERY = gql`
  query flowQuery($filter: String!) {
    tracks(filter: $filter, limit: 80) {
      title
      streamUrl
      thumb
  }
  }`;

export const Search_QUERY = gql`
  query searchQuery($q: String) {
    search(q: $q) {
      title
      thumb
    }
  }
`
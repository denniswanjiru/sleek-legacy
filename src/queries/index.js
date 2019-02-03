import gql from 'graphql-tag';

export const FLOW_QUERY = gql`
  query flowQuery($filter: String!) {
    tracks(filter: $filter, limit: 10) {
      id
      title
      thumb
      length
      trackId
      streamUrl
    }
  }`;

export const SEARCH_QUERY = gql`
  query searchQuery($q: String) {
    search(q: $q) {
      id
      title
      thumb
      length
      trackId
      streamUrl
    }
  }
`

export const LYRICS_QUERY = gql`
  query lyricsQuery($track: String) {
    lyrics(track: $track) {
      lyrics
    }
  }
`
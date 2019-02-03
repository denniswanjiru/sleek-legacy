import React, { Fragment } from 'react'
import { LYRICS_QUERY } from '../../queries';
import { Query } from 'react-apollo';
import withAppContext from '../Contexts/withAppContext';

import './index.scss';

const Lyrics = ({ context }) => {
  const { trackId } = context.current;
  return (
    <Fragment>
      <h3 className="lyrics--title">LYRICS</h3>
      {trackId && <Query query={LYRICS_QUERY} variables={{ track: trackId }}>
        {({ data, loading, error }) => {
          if (loading) return <p className="is-size-6">Loading...</p>
          if (error) return <p className="is-size-7">Something went wrong. Try again later!</p>
          return <p className="lyrics">{data.lyrics.lyrics}</p>
        }}
      </Query>}
    </Fragment>
  )
}

export default withAppContext(Lyrics)

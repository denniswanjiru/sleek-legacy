import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { SEARCH_QUERY } from '../../queries';
import TracksTable from '../TracksTable';

import './index.scss';
import withAppContext from '../Contexts/withAppContext';


function Search({context}) {
  const handleClick = (data, track) =>  {
    if (context.current.id ===  track.id) {
      context.togglePlaying()
      return
    }
    context.updatePlaylist({ tracks: data, name: "search" })
    context.updateCurrent(track)
  }
  return (
    <div className="page-wrapper">
      <div className="search-wrapper">
      { context.search ? (
        <Query query={SEARCH_QUERY} variables={{ q: context.search }}>
          {({ loading, data, error }) => {
            if (loading) return <div className="search--center">Loading...</div>

            return (
              <Fragment>
                {data && (
                  <div className="card--request-table">
                    <div className="thead">
                      <div className="small"></div>
                      <div>TRACK</div>
                      <div className="small"></div>
                      <div>ARTIST</div>
                      <div className="small">LENGTH</div>
                      <div className="small">POP</div>
                    </div>
                    <div className="tbody">
                      {data.search.map(track => <TracksTable key={track.id} track={track} handleClick={() => handleClick(data.search, track )}/>)}
                    </div>
                  </div>
                )}
              </Fragment>
            )
          }}
        </Query>
      ) : (
        <div className="search--center">
          <h2>Search Sleek</h2>
          <p>Find your Favorite songs, artists and playlists</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default withAppContext(Search)
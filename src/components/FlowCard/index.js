import React from 'react'

import play from '../../assets/icons/play.svg'
import pause from '../../assets/icons/pause.svg'
import { graphql } from 'react-apollo';
import { FLOW_QUERY } from '../../queries';

const Flow = ({ context: { context }, filter, data }) => {
  function setPlaylist(e) {
    if(data.tracks && !context.playlist.name !== filter) {
      context.updatePlaylist({ tracks: data.tracks, name: filter })
    }
  }

  return (
    <div className="card">
      <div className="play" onClick={setPlaylist}>
        <img src={context.playing ? pause : play} alt="" className="play--icon" />
      </div>
    </div>
  )
}

export default graphql(FLOW_QUERY, {
  options: props => ({variables: { filter: props.filter }})
})(Flow);

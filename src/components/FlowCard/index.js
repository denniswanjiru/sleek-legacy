import React from 'react'
import { graphql } from 'react-apollo';

import play from '../../assets/icons/play.svg'
import pause from '../../assets/icons/pause.svg'
import { FLOW_QUERY } from '../../queries';
import './index.scss';

const Flow = ({ context, filter, data }) => {
  function setPlaylist(e) {
    if(data.tracks && !context.playlist.name !== filter) {
      context.updatePlaylist({ tracks: data.tracks, name: filter })
    }
  }

  return (
    <div className="card card--image">
      <div className="play" onClick={setPlaylist}>
        <img src={context.playing ? pause : play} alt="" className="play--icon" />
      </div>
    </div>
  )
}

export default graphql(FLOW_QUERY, {
  options: props => ({variables: { filter: props.filter }})
})(Flow);

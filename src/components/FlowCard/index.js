import React from 'react'
import { graphql } from 'react-apollo';

import play from '../../assets/icons/play.svg'
import pause from '../../assets/icons/pause.svg'
import { FLOW_QUERY } from '../../queries';
import './index.scss';

const Flow = ({ context: { context }, filter, data }) => {
  function setPlaylist(e) {
    if(data.tracks && !context.playlist.name !== filter) {
      context.updatePlaylist({ tracks: data.tracks, name: filter })
    }
  }

  return (
    <div className="card card--image" style={{ backgroundImage: `url('https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')` }}>
      <div className="play" onClick={setPlaylist}>
        <img src={context.playing ? pause : play} alt="" className="play--icon" />
      </div>
    </div>
  )
}

export default graphql(FLOW_QUERY, {
  options: props => ({variables: { filter: props.filter }})
})(Flow);

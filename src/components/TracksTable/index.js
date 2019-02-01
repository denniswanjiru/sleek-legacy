import React, { useState } from 'react';
import './index.scss';
import { getTrack } from '../../helpers';

export default function TracksTable({ track }) {
  const [play, setPlay] = useState(false);
  const [artist, song] = getTrack(track.title);

  const hover = () => {

  }

  return (
    <div className="data-row">
      <div className="small">
        <p>Play</p>
        <img src={track.thumb} alt=""/>
      </div>
      <div className="is-capitalized">{song ? song : artist }</div>
      <div className="small">ICONS</div>
      <div className="is-capitalized">{song ? artist : 'Unknown Artist'}</div>
      <div className="small">{ track.length }</div>
      <div className="small">Popularity</div>
    </div>
  )
}

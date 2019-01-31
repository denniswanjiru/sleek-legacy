import React from 'react';
import './index.scss';
import { getTrack } from '../../helpers';

export default function TracksTable({ track }) {
  const [artist, song] = getTrack(track.title);
  return (
    <div className="data-row">
      <div className="small">Thumb - lik</div>
      <div className="is-capitalized">{song ? song : artist }</div>
      <div className="small">ICONS</div>
      <div className="is-capitalized">{song ? artist : 'Unknown Artist'}</div>
      <div className="small">13:23</div>
      <div className="small">Popularity</div>
    </div>
  )
}

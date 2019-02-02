import React from 'react';
import './index.scss';
import { getTrack } from '../../helpers';
import withAppContext from '../Contexts/withAppContext';

function TracksTable({ track, context, handleClick})  {
  const [artist, song] = getTrack(track.title);
  return (
    <div className="data-row" onClick={handleClick}>
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

export default withAppContext(TracksTable)
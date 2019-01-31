import React from 'react';
import './index.scss';

export default function Explore() {
  return (
    <div class="page-wrapper">
      <div className="card--request-table">
        <div className="thead">
          <div class="small"></div>
          <div>TRACK</div>
          <div class="small"></div>
          <div>ARTIST</div>
          <div class="small">LENGTH</div>
          <div class="small">POP</div>
        </div>
        <div className="tbody">
          <div className="data-row">
            <div className="small">Thumb - lik</div>
            <div className="">Symphony (feat. Zara Larsson)</div>
            <div className="small">ICONS</div>
            <div className="">Clean Bandit, Zara Larsson</div>
            <div className="small">13:23</div>
            <div className="small">Popularity</div>
          </div>
        </div>
      </div>
    </div>
  )
}

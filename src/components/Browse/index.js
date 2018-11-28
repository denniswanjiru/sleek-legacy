import React from 'react';

import './index.scss';

export default function Browse() {
  return (
    <div className="browse">
      <div className="panel-header">
        <div className="flow-text">Browse</div>
        <p className="drip-text">Explore by genre and mood</p>
      </div>

      <div className="cards-flex cards-flex--small">
        <div className="card card--small">Dance & EDM</div>
        <div className="card card--small">Pop</div>
        <div className="card card--small">Popular</div>
        <div className="card card--small">R 'n' B</div>
        <div className="card card--small">Charts</div>
      </div>
    </div>
  )
}

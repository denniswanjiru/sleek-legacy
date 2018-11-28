import React from 'react'

export default function Picks() {
  return (
    <div className="browse">
      <div className="panel-header">
        <div className="flow-text">Playlist picks</div>
        <p className="drip-text">Chosen just for you</p>
      </div>

      <div className="cards-flex cards-flex--large">
        <div className="card card--large-square">Dance & EDM</div>
        <div className="card card--large-square">Pop</div>
        <div className="card card--large-square">Pop</div>
        <div className="card card--large-square">Pop</div>
      </div>
    </div>
  )
}
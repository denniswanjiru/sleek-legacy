import React from 'react'
import PanelHeader from '../HOC/PanelHeader';

export default function Charts() {
  return (
    <PanelHeader title="Charts">
      <div className="cards-flex cards-flex--large">
        <div className="card card--large">Dance & EDM</div>
        <div className="">
          Tracks
        </div>
      </div>
    </PanelHeader>
  )
}

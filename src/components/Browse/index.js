import React from 'react';

import './index.scss';
import PanelHeader from '../HOC/PanelHeader';

export default function Browse() {
  return (
    <PanelHeader title="Browse" subtitle="Explore by genre and mood">
      <div className="cards-flex cards-flex--small">
        <div className="card card--small">Dance & EDM</div>
        <div className="card card--small">Pop</div>
        <div className="card card--small">Popular</div>
        <div className="card card--small">R 'n' B</div>
        <div className="card card--small">Charts</div>
      </div>
    </PanelHeader>
  )
}

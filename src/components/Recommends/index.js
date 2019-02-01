import React from 'react'
import PanelHeader from '../HOC/PanelHeader';

export default function Recommends() {
  return (
    <PanelHeader
      title="Sleek recommends"
      customClass="card--large"
      data={["Dance & EDM", "Pop"]}
    />
  )
}

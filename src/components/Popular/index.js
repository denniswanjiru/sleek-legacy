import React from 'react'
import PanelHeader from '../HOC/PanelHeader';

export default function Popular() {
  return (
    <PanelHeader
      title="Popular"
      data={["Dance & EDM", "New", "Pop",  "R 'n' B"]}
    />
  )
}
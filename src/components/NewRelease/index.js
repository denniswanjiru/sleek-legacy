import React from 'react'
import PanelHeader from '../HOC/PanelHeader';

export default function NewRelease() {
  return (
    <PanelHeader
      title="New Release"
      data={["Dance & EDM", "New", "Pop", "R 'n' B"]}
    />
  )
}
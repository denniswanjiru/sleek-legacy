import React, { Fragment } from 'react';
import PanelHeader from '../HOC/PanelHeader';

export default function Picks() {
  return (
    <PanelHeader
      title="Playlist picks"
      subtitle="Chosen just for you"
      data={["Dance & EDM", "New", "Pop", "R 'n' B"]}
    />
  )
}
import React from 'react';
import FlowCard from '../FlowCard';

const Flow = ({ context }) => (
  <React.Fragment>
    <div className="panel-header">
    </div>
    <div className="flow">
      <FlowCard context={context} filter="kenya" />
      <FlowCard context={context} filter="Most Viewed" />
      <FlowCard context={context} filter="Electronic" />
    </div>
  </React.Fragment>
);

export default Flow;

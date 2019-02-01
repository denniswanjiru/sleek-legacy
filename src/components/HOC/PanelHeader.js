import React from 'react';

const PanelHeader = ({ title, subtitle, data, customClass, children }) =>  (
  <div className="browse">
    <div className="panel-header">
      <div className="flow-text">{title}</div>
      {subtitle && <p className="drip-text">{subtitle}</p>}
    </div>

    { data ? (
      <div className="cards-flex cards-flex--large">
        { data.map(title => <div className={ customClass ? 'card ' + customClass : 'card card--large-square' }>{title}</div>) }
      </div>
    ) : children }
  </div>
);

export default PanelHeader;
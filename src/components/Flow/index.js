import React from 'react'

import play from '../../assets/icons/play.svg'

export default function Flow() {
  return (
    <React.Fragment>
      <div className="panel-header">
      </div>
      <div className="flow">
        <div className="card">
          <div className="play">
            <img src={play} alt="" className="play--icon" />
          </div>
        </div>
        <div className="card">
          <div className="play">
            <img src={play} alt="" className="play--icon" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

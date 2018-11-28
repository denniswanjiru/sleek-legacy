import React, { useState , useContext, useEffect} from 'react'

import play from '../../assets/icons/play.svg'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Flow = ({ context: { context }, data }) => {
  const [flow, setFlow] = useState([]);
  if(data.tracks && !context.current) {
    context.updateCurrent(data.tracks[4].streamUrl)
  }

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

export default graphql(gql`
  query flowQuery {
    tracks(filter:"uk", limit: 80) {
      title
      streamUrl
    }
  }
`)(Flow);


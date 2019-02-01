import React from 'react';
import { Query } from 'react-apollo';
import { SEARCH_QUERY } from '../../queries';
import TracksTable from '../TracksTable';

import './index.scss';


export default function Search({context: { context } }) {
  console.log('>>>>>>', context.search)

  return (
    <div className="page-wrapper">
      <Query query={SEARCH_QUERY} variables={{ q: context.search }}>
        {({ loading, data, error }) => {
          if(loading) return 'Loading...'
          return (
            <div className="search-wrapper">
              <div className="card--request-table">
                <div className="thead">
                  <div class="small"></div>
                  <div>TRACK</div>
                  <div class="small"></div>
                  <div>ARTIST</div>
                  <div class="small">LENGTH</div>
                  <div class="small">POP</div>
                </div>
                <div className="tbody">
                  {data && data.search.map(track => <TracksTable track={track} />)}
                </div>
              </div>

            </div>
          )
        }}
      </Query>
    </div>
  )
}

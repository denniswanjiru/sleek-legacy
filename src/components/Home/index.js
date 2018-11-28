import React, {Fragment} from 'react'

import Flow from '../Flow';
import './index.scss';
import Browse from '../Browse';
import Recommends from '../Recommends';
import Picks from '../Picks';
import Popular from '../Popular';
import Charts from '../Charts';
import NewRelease from '../NewRelease';

export default function Home({context}) {
  return (
    <Fragment>
      <Flow context={context} />
      <Browse />
      <Recommends />
      <Picks />
      <Popular />
      <Charts />
      <NewRelease />
    </Fragment>
  )
}

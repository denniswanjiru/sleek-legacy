import React, { useEffect, useState, useContext } from 'react';
import './index.scss';

const Player = ({ streamUrl, context }) => {
  console.log(context, "++++++");

  const [stream, setStream] = useState("");
  useEffect(() => {
    context.current !== "" && fetch(`http://localhost:5000/${context.current}`)
    .then(res => res.json())
    .then((data) => setStream(data))
  }, [context])

  return(
    <section className="player">
      <div className="controls">Cotrols</div>
      <div className="progress">
        {stream && <audio controls>
          <source src={ `http://localhost:5000${stream.url}`} type="audio/mpeg" />
        </audio>}
      </div>
      <div className="actions">Actions</div>
    </section>
  )
}

export default  Player;
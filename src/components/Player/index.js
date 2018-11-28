import React, { useEffect, useState } from 'react';
import './index.scss';

const Player = ({ context }) => {

  const [stream, setStream] = useState("");
  useEffect(() => {
    context.current !== "" && fetch(`http://localhost:5000/${context.current}`)
    .then(res => res.json())
    .then((data) => setStream(data))
  }, [context.current])

  const songEnd = (e) => {
    setStream("");
    context.playNext();
  }
  return(
    <section className="player">
      <div className="controls">Cotrols</div>
      <div className="progress">
        {stream && <audio controls autoPlay onEnded={songEnd}>
          <source src={ `http://localhost:5000${stream.url}`} type="audio/mpeg" />
        </audio>}
        <a href="#!" onClick={() =>songEnd() }> NEXT </a>
      </div>
      <div className="actions">Actions</div>
    </section>
  )
}

export default  Player;
import React, { useEffect, useState } from 'react';

import play from "../../assets/icons/play.svg";
import next from "../../assets/icons/next.svg";
import prev from "../../assets/icons/prev.svg";
import shuffle from "../../assets/icons/shuffle.svg";
import repeat from "../../assets/icons/repeat.svg";
import heart from "../../assets/icons/heart.svg";
import mix from "../../assets/icons/mix.svg";
import volume from "../../assets/icons/volume.svg";
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
      <div className="playing">
        <img
          src="https://img.cdandlp.com/2017/11/imgL/118981381.jpg"
          alt=""
          height="70"
          width="70"
          className="small--thumb"
        />

        <div className="song">
          <p className="song--title">Stuck in The Middle</p>
          <p className="song--artist">Mike Posner</p>
        </div>

        <img src={heart} alt=""/>
      </div>
      <div className="sleek--player">
        <div className="controls">
          <img src={shuffle} alt=""/>
          <img src={prev} alt=""/>
          <div className="play">
            <img src={play} alt="" className="play--icon" />
          </div>
          <img src={next} alt=""/>
          <img src={repeat} alt=""/>
        </div>
        <progress className="progress"></progress>

        {stream && <audio autoPlay onEnded={songEnd}>
          <source src={ `http://localhost:5000${stream.url}`} type="audio/mpeg" />
        </audio>}
      </div>
      <div className="actions">
        <div>
          <img src={volume} alt=""/>
          <img src={mix} alt=""/>
        </div>
        <img src="http://www.hawtcelebs.com/wp-content/uploads/2018/04/anne-marie-launches-her-debut-album-at-g-a-y-in-london-04-28-2018-15_thumbnail.jpg" alt=""/>
        <p>Queue</p>
      </div>
    </section>
  )
}

export default  Player;
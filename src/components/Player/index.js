import React, { useEffect, useState } from 'react';

import play from "../../assets/icons/play.svg";
import next from "../../assets/icons/next.svg";
import prev from "../../assets/icons/prev.svg";
import shuffle from "../../assets/icons/shuffle.svg";
import repeat from "../../assets/icons/repeat.svg";
import heart from "../../assets/icons/heart.svg";
import mix from "../../assets/icons/mix.svg";
import volume from "../../assets/icons/volume.svg";
import plus from "../../assets/icons/plus.svg";
import pause from "../../assets/icons/pause.svg";
import './index.scss';

const Player = ({ context }) => {
  const {title, thumb, streamUrl} = context.current;

  const [stream, setStream] = useState("");

  console.log(context)
  let artist, song;
  if(title) {
    [artist, song] = title.split('-');
  }

  if(stream.url) {
     let audio = document.getElementById('playera');
     console.log(audio);
  }


  useEffect(() => {
    streamUrl && fetch(`http://localhost:5000/${streamUrl}`)
    .then(res => res.json())
    .then((data) => setStream(data))
  }, [context.current])

  useEffect(() => {
    if(stream) {
      if(context.playing) {
        document.getElementById("playera").pause()
      } else {
        document.getElementById("playera").play()
      }
    }
  }, [context.playing])

  const songEnd = (e) => {
    setStream("");
    context.playNext();
  }

  const togglePlay = (e) => {
    e.preventDefault()
    if(context.playing) {
      document.getElementById("playera").pause()
    } else {
       document.getElementById("playera").play()
    }
  }

  return(
    <section className="player">
      <div className="playing">
        <img
          src={thumb}
          alt=""
          height="70"
          width="70"
          className="small--thumb"
        />

        <div className="song">
          <p className="song--title">{song && song.substr(0, 20)}</p>
          <p className="song--artist">{artist && artist.substr(0, 20)}</p>
        </div>

        <img src={heart} alt=""/>
      </div>
      <div className="sleek--player">
        <div className="controls">
          <img src={shuffle} alt=""/>
          <img src={prev} alt=""/>
          <div className="play" onClick={togglePlay}>
            <img src={context.playing ? pause : play} alt="" className="play--icon" onClick={context.togglePlaying} />
          </div>
          <img src={next} alt="" onClick={songEnd} />
          <img src={repeat} alt=""/>
        </div>
        <progress className="progress"></progress>

        {stream && <audio autoPlay  onEnded={songEnd} id="playera">
          <source src={ `http://localhost:5000${stream.url}`} type="audio/mpeg" />
        </audio>}
      </div>
      <div className="actions">
        <div>
          <img src={plus} alt=""/>
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
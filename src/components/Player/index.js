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
  const {title, thumb, streamUrl, length} = context.current;
  const [stream, setStream] = useState("");

  let artist, song;
  if(title) {
    [artist, song] = title.split(' - ');
  }

  useEffect(() => {
    setStream("")
    streamUrl && fetch(`http://localhost:5000/${streamUrl}`)
    .then(res => res.json())
    .then((data) => setStream(data))
  }, [context.current])

  useEffect(() => {
    if(stream) {
      if(!context.playing) {
        document.getElementById("audio").pause()
      } else {
        document.getElementById("audio").play()
      }
    }
  }, [context.playing])

  const songEnd = (e) => {
    setStream("");
    context.playNext();
  }

  const handlePrev = () => {
    setStream("");
    context.playPrev();
  }

  const progressBar = () => {
    const player = document.getElementById("audio")

    const current_time = player.currentTime;

    // calculate total length of value
    document.getElementById("end-time").innerHTML = length;
    // calculate current value time
    const currentTime = calculateCurrentValue(current_time);
    document.getElementById("start-time").innerHTML = currentTime;

    const progressbar = document.getElementById('progress');
    progressbar.value = (player.currentTime / player.duration);
    progressbar.addEventListener("click", seek);

    function seek(event) {
      const percent = event.offsetX / this.offsetWidth;
      player.currentTime = percent * player.duration;
      progressbar.value = percent / 100;
    }
  }

  function calculateCurrentValue(currentTime) {
    const current_minute = parseInt(currentTime / 60) % 60,
      current_seconds_long = currentTime % 60,
      current_seconds = current_seconds_long.toFixed(),
      current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
  }

  const cleanString = data => {
    const cleanup = data && data.split('(')[0].trim().substr(0, 20)
    return cleanup && cleanup.split('[')[0].trim().substr(0, 20);
  }

  return(
    <section className="player">
      <div className="playing">
        <div>
          <img
            src={thumb}
            alt=""
            height="70"
            width="70"
            className="small--thumb"
            />

          <div className="song">
            <p className="song--title">{cleanString(song)}</p>
            <p className="song--artist">{cleanString(artist)}</p>
          </div>
        </div>

        <img src={heart} alt="" className="icon" />
      </div>
      <div className="sleek--player">
        <div className="controls">
          <img src={shuffle} alt="" className="icon" onClick={context.toggleLyrics} />
          <img src={prev} alt="" className="icon" onClick={handlePrev} />
          <div className="play icon" onClick={context.togglePlaying}>
            <img src={context.playing ? pause : play} alt="" className="play--icon" disabled />
          </div>
          <img src={next} alt="" className="icon"  onClick={songEnd} />
          <img src={repeat} alt="" className="icon" />
        </div>
        <div className="progress-indicator">
          <small id="start-time" className="start-time"></small>
            <progress className="progress"  id="progress" value="0" max="1"></progress>
          <small  id="end-time" className="end-time"></small>
        </div>
        {stream && <audio autoPlay  onEnded={songEnd} id="audio" onTimeUpdate={progressBar}>
          <source src={ `http://localhost:5000${stream.url}`} type="audio/mpeg" />
        </audio>}
      </div>
      <div className="actions">
        <div>
          <img src={plus} alt="" className="icon" />
          <img src={volume} alt="" className="icon" />
          <img src={mix} alt="" className="icon" />
        </div>
        <img src="http://www.hawtcelebs.com/wp-content/uploads/2018/04/anne-marie-launches-her-debut-album-at-g-a-y-in-london-04-28-2018-15_thumbnail.jpg" alt="" />
        <p>Queue</p>
      </div>
    </section>
  )
}

export default  Player;
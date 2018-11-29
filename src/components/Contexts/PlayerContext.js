import React, { useState , useEffect} from 'react'

export const { Provider, Consumer } = React.createContext();


export default function PlayerContext({children}) {
  const [current, setCurrent] = useState({});
  const [np , setNp] = useState(0);
  const [playlist, setPlayList] = useState([]);
  const [playing, setPlaying] = useState(false);


  const updateCurrent = (current) => {
    setCurrent(current )
  }

  useEffect(() => {
    if(playlist.name){
      // localStorage.setItem('playlist', playlist.name)
      playNext()
    }

  }, [playlist])


  const updatePlaylist = (playlist) => {
    setPlayList(playlist)
  }

  const togglePlaying = () => {
    setPlaying(!playing)
  }

  const playNext = () => {
    setCurrent(playlist.tracks[np]);
    setNp(np + 1)
  }

  const context = {
    current,
    playlist,
    playing,
    updateCurrent,
    updatePlaylist,
    playNext,
    togglePlaying
  };

  return (
    <Provider value={{ ...context }}>
      { children }
    </Provider>
  )
}

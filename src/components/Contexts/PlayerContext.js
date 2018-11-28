import React, { useState , useEffect} from 'react'

export const { Provider, Consumer } = React.createContext();


export default function PlayerContext({children}) {
  const [current, setCurrent] = useState("");
  const [np , setNp] = useState(0);
  const [playlist, setPlayList] = useState([]);
  const [next, setNext] = useState("");


  const updateCurrent = (current) => {
    setCurrent(current )
  }

  useEffect(() => {
    if(playlist.name) {
      playNext()
    }
  }, [playlist])


  const updatePlaylist = (playlist) => {
    setPlayList(playlist)
  }

  const playNext = () => {
    setCurrent(playlist.tracks[np].streamUrl);
    setNp(np + 1)
  }



  const context = { current, playlist,  updateCurrent, updatePlaylist, playNext };

  return (
    <Provider value={{ ...context }}>
      { children }
    </Provider>
  )
}

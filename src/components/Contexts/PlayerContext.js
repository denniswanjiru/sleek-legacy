import React, { useState , useEffect} from 'react';
import { debounce } from 'lodash';

export const { Provider, Consumer } = React.createContext();

export default function PlayerContext({children}) {
  const [np , setNp] = useState(0);
  const [search, setSearch] = useState(null);
  const [current, setCurrent] = useState({});
  const [playlist, setPlayList] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [queue , setQueue] = useState({next: 1, np: 0, prev: -1});

  useEffect(() => {
    if(playlist.name){
      togglePlaying();
      const name = localStorage.getItem('playlist')
      if(!playing) {
        console.log(playlist)
        localStorage.setItem('playlist', playlist.name)
        triggerPlaylist()
      }
    }
  }, [playlist])

  useEffect(() => {
    if(np !== 0) {
      setQueue({...queue, next: np + 1, np, prev: np - 1});
    } else {
      setQueue({...queue, next: 1, np, prev: -1});
    }
  }, [np]);

  useEffect(() => {
    console.log(search)
  }, [search])

  // Search
  const searchSongs = debounce(query => {
    setSearch(query);
  }, 1000);

  const updatePlaylist = (playlist) => {
    setPlayList(playlist)
  }

  const updateCurrent = (current) => {
    setCurrent(current)
  }

  const togglePlaying = () => {
    setPlaying(!playing)
  }

  const triggerPlaylist = () => {
    setPlaying(true)
    setCurrent(playlist.tracks[0]);
  }

  const handlePlaying = playing => {
    const next = (playing === 'next');
    next ? setNp(np + 1) : setNp(np - 1)
    setPlaying(true)
    setCurrent(playlist.tracks[next ? queue.next : queue.prev]);
  }

  const playNext = () => {
    handlePlaying('next')
  }

  const playPrev = () => {
    handlePlaying('prev')
  }

  const context = {
    current,
    search,
    searchSongs,
    np,
    playlist,
    playing,
    queue,
    updateCurrent,
    updatePlaylist,
    playNext,
    playPrev,
    togglePlaying
  };

  return (
    <Provider value={{ ...context }}>
      { children }
    </Provider>
  )
}

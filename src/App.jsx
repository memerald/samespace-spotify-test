import { useEffect, useState } from 'react';
import { fetchSongs } from './api/api';
import Sidebar from './components/Header/Sidebar';
import TrackList from './components/TrackList/TrackList';

import './App.css';
import "./assets/styles.scss"
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  const [songsList, setSongsList] = useState([]);
  const [selectedSong, setSelectedSong] = useState('');
  const [currentSong, setCurrentSong] = useState({});

  useEffect(() => {
    const getSongs = async () => {
      const response = await fetchSongs().then((res) =>
        res.data.filter((song) => song?.status === 'published')
      );
      setSongsList(response);
    };
    getSongs();
  }, []);

  useEffect(() => {
    setCurrentSong(songsList.find((ele) => ele?.name === selectedSong));
  }, [selectedSong]);

  console.log({ currentSong });

  return (
    <>
      <div
        className="flex gap-28"
        style={{
          background: selectedSong
            ? `linear-gradient(135deg, ${currentSong?.accent}, #000)`
            : '#000',
        }}
      >
        <Sidebar />
        <TrackList songsList={songsList} setSelectedSong={setSelectedSong} />
        <div className="flex justify-center items-center w-full">
          {selectedSong && (
            <MusicPlayer
              artist={currentSong?.artist}
              name={currentSong?.name}
              cover={currentSong?.cover}
              url={currentSong?.url}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;

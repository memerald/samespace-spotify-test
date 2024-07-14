import { useEffect, useState } from 'react';
import Search from '../common/Search';
import SongItem from '../common/SongItem';
import TabHeader from '../common/TabHeader';
import { TABS } from '../../constants/constants';

const TrackList = ({ songsList, setSelectedSong }) => {
  const [activeTab, setActiveTab] = useState(TABS.FOR_YOU);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setIsAnimating(true);
    const timeoutId = setTimeout(() => {
      const filtered = songsList.filter((song) =>
        activeTab === TABS.FOR_YOU ? !song?.top_track : song?.top_track
      ).filter(song => song.name.toLowerCase().includes(searchValue.toLowerCase()));
      setFilteredSongs(filtered);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [activeTab, songsList, searchValue]);

  useEffect(() => {
    setSearchValue('')
  }, [activeTab])
  

  return (
    <div className="pt-8 max-w-[432px] w-full mx-auto px-4 md:px-0">
      <div className="flex gap-4 md:gap-10 justify-center md:justify-start">
        <TabHeader
          title={TABS.FOR_YOU}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabHeader
          title={TABS.TOP_TRACKS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="mt-4 md:mt-8 mb-4 md:mb-6">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="flex flex-col">
        {filteredSongs.map((song, index) => {
          const { id, name, artist, cover } = song;
          return (
            <div
              key={id}
              className={`transition-opacity duration-300 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SongItem
                key={id}
                name={name}
                artist={artist}
                cover={cover}
                setSelectedSong={setSelectedSong}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackList;

import { BASE_PATH } from '../../constants/constants';
import { getRandomMinutes, getRandomSeconds } from "../../utils/utils";

const SongItem = ({ name, artist, cover, setSelectedSong }) => {
  return (
    <div
      onClick={() => setSelectedSong(name)}
      className="flex justify-between text-white p-4 pl-0 items-center hover:bg-[#ffffff14] cursor-pointer transition-transform transform hover:scale-105"
    >
      <div className="flex items-center gap-4">
        <img
          src={`${BASE_PATH}/assets/${cover}`}
          alt="thumbnail"
          className="h-10 w-10 md:h-12 md:w-12 rounded-full transition-transform transform hover:scale-105"
        />
        <div className="flex flex-col inter-regular">
          <p className="text-base md:text-lg">{name}</p>
          <p className="text-xs md:text-sm text-secondary">{artist}</p>
        </div>
      </div>
      <p className="text-base md:text-lg inter-regular text-secondary">{getRandomMinutes()}:{getRandomSeconds()}</p>
    </div>
  );
};

export default SongItem;

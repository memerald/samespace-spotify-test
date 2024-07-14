import AudioPlayer from 'react-h5-audio-player';
import PlayerControl from '../common/PlayerIcons';
import { BASE_PATH, MUSIC_PLAYER_ICONS } from '../../constants/constants';

const MusicPlayer = ({ url, name, artist, cover }) => {
  return (
    <div className="flex flex-col items-center text-white w-full max-w-[480px] player-container mx-auto px-4 md:px-0">
      <div className="self-start mb-8">
        <h3 className="text-2xl md:text-[32px] inter-bolder">{name}</h3>
        <p className="text-secondary inter-regular text-[14px] md:text-[16px]">{artist}</p>
      </div>
      <img
        src={`${BASE_PATH}/assets/${cover}`}
        alt="album-cover"
        className="rounded-md mb-4 w-full h-[320px] md:h-[480px]"
      />
      <AudioPlayer
        showFilledProgress={false}
        hasDefaultKeyBindings
        customIcons={{
          play: <PlayerControl icon={MUSIC_PLAYER_ICONS.play} />,
          pause: <PlayerControl icon={MUSIC_PLAYER_ICONS.pause} />,
          next: <PlayerControl icon={`${MUSIC_PLAYER_ICONS.next} text-[#9b9c9d]`} />,
          previous: <PlayerControl icon={`${MUSIC_PLAYER_ICONS.previous} text-[#9b9c9d]`} />,
          volume: <PlayerControl icon={MUSIC_PLAYER_ICONS.volume} />,
          volumeMute: <PlayerControl icon={MUSIC_PLAYER_ICONS.mute} />,
        }}
        customAdditionalControls={[]}
        src={url}
        showSkipControls={true}
        showJumpControls={false}
        autoPlay
        layout="stacked"
        autoPlayAfterSrcChange={false}
      />
    </div>
  );
};

export default MusicPlayer;

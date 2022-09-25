import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, index, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[190px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-39.5 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img src={song.images?.coverart} alt="song_img" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-medium text-base text-white mt-2">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-400 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;

import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePlay, handlePause }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle className="text-gray-300" size={30} onClick={handlePause} />
  ) : (
    <FaPlayCircle className="text-gray-300"  size={30} onClick={handlePlay} />
  );

export default PlayPause;

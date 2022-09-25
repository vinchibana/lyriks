import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">猜你喜欢：</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, index) => (
        <SongBar
          song={song}
          key={song.key}
          i={index}
          isPlaying={isPlaying}
          artistId={artistId}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;

import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useParams } from "react-router-dom";
import { useGetSongsBySearchQuery } from "../redux/services/shazam";

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) return <Loader title="搜索中..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        <span className="font-black">{searchTerm}</span> 的搜索结果
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, index) => (
          <SongCard
            song={song}
            key={index}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;

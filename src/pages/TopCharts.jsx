import { useSelector } from "react-redux";
import { useGetTopChartsQuery } from "../redux/services/shazam";
import { Error, Loader, SongCard } from "../components";

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="正在载入全球热门歌曲..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        全球热门
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <SongCard
            song={song}
            key={song.key}
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

export default TopCharts;

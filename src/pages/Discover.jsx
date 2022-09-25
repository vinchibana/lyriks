import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsByGenreQuery } from "../redux/services/shazam";
import { useSelector, useDispatch } from "react-redux";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
  const dispatch = useDispatch();
  // 获取数据
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );
  const { data, isFetching, error } = useGetTopChartsByGenreQuery(
    genreListId || "POP"
  );
  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  if (isFetching) return <Loader title="获取歌曲中..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          浏览 {genreTitle}
        </h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value));
          }}
          value={genreListId || "流行"}
          className="bg-black text-gray-300 p-3 text-base rounded-lg"
        >
          {genres.map((genre) => (
            <option value={genre.value} key={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <SongCard
            key={song.key}
            song={song}
            index={index}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          ></SongCard>
        ))}
      </div>
    </div>
  );
};

export default Discover;

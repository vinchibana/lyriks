import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazam";

// 仅需要 songid 获取详情，songid 从路由参数中取得
const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({songid});

  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({songid});

  const handlePauseClick = () => {
    dispatch(playPause(true));
  };

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(false));
  };

  if (isFetchingSongDetails || isFetchingRelatedSongs)
    return <Loader title="正在获取歌曲详情..." />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">歌词</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, index) => (
              <p className="text-gray-400 text-base my-1" key={index}>
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">暂无歌词</p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;

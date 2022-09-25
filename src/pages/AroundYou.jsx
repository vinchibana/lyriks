import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import axios from "axios";
import { useGetSongsByCountryQuery } from "../redux/services/shazam";

const CountryTracks = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  const songData = data?.slice(0, 20);

  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country?apiKey=at_W4IYM7PLdtSxaS4OdiK1LoNEJudmq"
      )
      .then((res) => {
        setCountry(res?.data?.location?.country);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [country]);

  if (isFetching && loading) return <Loader title="正在载入周边热门歌曲..." />;
  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        周边热门 <span className="font-black">上海</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songData?.map((song, index) => (
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

export default CountryTracks;

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazam";
import "swiper/css";
import "swiper/css/free-mode";

// 自有组件
const TopChartCard = ({
  song,
  index,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
}) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-green-600 ${
      activeSong?.title === song?.title ? "bg-green-600" : "bg-transparent"
    } py-2 p-4 rounded-lg cursor-pointer mb-1`}
  >
    <h3 className="font-bold text-base text-white mr-3">{index + 1}</h3>
    <div className="flex-1 flex flex-row justify-between h-16">
      <img
        className="w-16 h-16 rounded-lg"
        src={song.images?.coverart}
        alt="song_img"
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-lg font-bold text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-sm  text-gray-300 mt-1">{song?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
      isPlaying={isPlaying}
      activeSong={activeSong}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const divRef = useRef(null);
  const { data } = useGetTopChartsQuery();
  const topPlays = data?.slice(0, 5);

  // useEffect(() => {
  //   divRef.current.scrollIntoView({ behavior: "smooth" });
  // });
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[400px] max-w-full flex flex-col "
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-medium text-xl">排行榜</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">更多</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1 ">
          {topPlays?.map((song, index) => (
            <TopChartCard
              song={song}
              key={song.key}
              index={index}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, index)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold">热门艺人</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">更多</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((song, index) => (
            <SwiperSlide
              key={song.key}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${song?.artists[0].adamid}`}>
                <img
                  src={song?.images.background}
                  alt="name"
                  className="rounded-full w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  const genreTitle = "Pop";
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          发现 {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg"
        >
          {genres.map((genre) => (
            <option value={genre.value} key={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song,index) => (
          <SongCard key={song} song={song} index={index}></SongCard>
        ))}
      </div>
    </div>
  );
};

export default Discover;

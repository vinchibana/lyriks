import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/all";

const Searchbar = () => {
  const navigate = useNavigate();
  // 创建两个 state
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        搜索歌曲
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" />
        <input
          autoComplete="off"
          name="search-field"
          id="search-field"
          type="search"
          value={searchTerm}
          placeholder="搜索歌曲"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;

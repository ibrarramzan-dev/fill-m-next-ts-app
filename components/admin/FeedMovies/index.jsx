"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Select, Space } from "antd";

function FeedMovies() {
  const movies = useSelector((state) => state.movies);

  const [movieResults, setMovieResults] = useState([]);
  const [value, setValue] = useState();

  const fetchMovies = (search) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=33997e27d6abf922adb70f5dc0f0c135&query=${search}`
      )
      .then((res) => {
        const { results } = res.data;

        setMovieResults([...results]);
        // dispatch(feedMovies(moviesData));
      });
  };

  const handleSearch = (newValue) => {
    console.log("handle search");
    fetchMovies(newValue);
  };

  const handleChange = (newValue) => {
    console.log("handle change");
    // setValue(newValue);
  };
  return (
    <div className="FeedMovies">
      <p className="heading">Feed Movies</p>

      <div className="FeedMovies-select-movies-wrapper">
        <Select
          showSearch
          value={value}
          placeholder="Search movie"
          className="FeedMovies-select-movies"
          defaultActiveFirstOption={false}
          suffixIcon={null}
          filterOption={false}
          onSearch={handleSearch}
          onChange={handleChange}
          notFoundContent={null}
          options={(movieResults || []).map((m) => {
            const { title, release_date } = m;
            let releaseYear = "";

            release_date
              ? (releaseYear = ` (${release_date.split("-")[0]})`)
              : null;

            return {
              value: `${title}${releaseYear}`,
              label: `${title}${releaseYear}`,
            };
          })}
        />
      </div>
    </div>
  );
}

export default FeedMovies;

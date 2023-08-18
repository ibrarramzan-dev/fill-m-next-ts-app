"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Select, Space } from "antd";
import Pill from "../Pill";

function FeedMovies({ cellLabel }) {
  const movies = useSelector((state) => state.movies);

  const [movieResults, setMovieResults] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [value, setValue] = useState();

  const fetchMovies = (search) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=33997e27d6abf922adb70f5dc0f0c135&query=${search}`
      )
      .then((res) => {
        const { results } = res.data;

        const finalResults = [];
        results.forEach((record) => {
          const { title, release_date } = record;
          let releaseYear = "";

          release_date
            ? (releaseYear = ` (${release_date.split("-")[0]})`)
            : null;

          if (!selectedMovies.includes(`${record.title}${record.year}`)) {
            finalResults.push(record);
          }
        });

        setMovieResults([...finalResults]);
        // dispatch(feedMovies(moviesData));
      });
  };

  const handleSearch = (newValue) => {
    console.log("handle search");
    fetchMovies(newValue);
  };

  const handleSelect = (selectedValue) => {
    if (!selectedMovies.includes(selectedValue)) {
      setSelectedMovies([...selectedMovies, selectedValue]);
    }
  };

  console.log(selectedMovies);

  const handleChange = (newValue) => {
    console.log("handle change");
    // setValue(newValue);
  };
  return (
    <div className="FeedMovies">
      <p className="FeedMovies-heading heading">
        <p> Feed Movies</p>
        <p className="FeedMovies-cell-label-text">{cellLabel}</p>
      </p>

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
          onSelect={handleSelect}
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

        <div className="FeedMovies-select-movies-pills-wrapper">
          {selectedMovies.map((movie) => (
            <Pill key={movie} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedMovies;

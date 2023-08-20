"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Select, Space } from "antd";
import { FiSearch } from "react-icons/fi";
import Pill from "../Pill";
import { addAnswer } from "@/app/AppState/Features/admin/adminSlice";

function FeedMovies({ cellLabel }) {
  const answers = useSelector((state) => state.admin.puzzle.answers[cellLabel]);

  const [movieResults, setMovieResults] = useState([]);
  const [value, setValue] = useState();

  const dispatch = useDispatch();

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

          if (!answers.includes(`${record.title}${record.year}`)) {
            finalResults.push(record);
          }
        });

        setMovieResults([...finalResults]);
      });
  };

  const handleSearch = (newValue) => {
    console.log("handle search");
    fetchMovies(newValue);
  };

  const handleSelect = (selectedValue) => {
    if (!answers.includes(selectedValue)) {
      dispatch(
        addAnswer({
          cellLabel,
          selectedMovie: selectedValue,
        })
      );
    }
  };

  const handleChange = (newValue) => {
    console.log("handle change");
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
          suffixIcon={<FiSearch style={{ fontSize: "1.15rem" }} />}
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
      </div>

      <div className="FeedMovies-select-movies-pills-wrapper">
        {answers.length > 0 ? (
          answers.map((movie) => (
            <Pill cellLabel={cellLabel} movie={movie.movie} key={movie.movie} />
          ))
        ) : (
          <p className="FeedMovies-select-movies-pills-no-selection-text">
            No movies selected
          </p>
        )}
      </div>
    </div>
  );
}

export default FeedMovies;

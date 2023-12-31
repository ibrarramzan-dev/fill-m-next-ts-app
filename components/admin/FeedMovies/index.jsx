"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import _ from "lodash";
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
          const { release_date } = record;
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
    fetchMovies(newValue);
  };

  const handleSelect = (selectedValue) => {
    const [id, title, releaseYear, poster_path] = selectedValue.split("~!~");

    const found = _.find(answers, { id });

    if (found === undefined) {
      dispatch(
        addAnswer({
          cellLabel,
          tmdbId: id,
          selectedMovie: `${title}${releaseYear}`,
          poster_path,
        })
      );
    }
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
          notFoundContent={null}
          options={(movieResults || []).map((m) => {
            const { id, title, poster_path, release_date } = m;

            let releaseYear = "";

            release_date
              ? (releaseYear = ` (${release_date.split("-")[0]})`)
              : null;

            return {
              value: `${id}~!~${title}~!~${releaseYear}~!~${poster_path}`,
              label: `${title}${releaseYear}`,
            };
          })}
        />
      </div>

      <div className="FeedMovies-select-movies-pills-wrapper">
        {answers.length > 0 ? (
          answers.map((movie) => (
            <Pill
              cellLabel={cellLabel}
              movie={`${movie.movie}${
                movie.release_date ? ` (${release_date.split("-")[0]})` : ""
              }`}
              key={movie.movie}
            />
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal, Select } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { answerGuessed } from "@/app/AppState/Features/puzzle/puzzleSlice";

function Cell({
  top,
  topImg,
  topAttrLink,
  left,
  leftImg,
  leftAttrLink,
  label,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState();
  const [movieResults, setMovieResults] = useState([]);

  const dispatch = useDispatch();

  const onCellClick = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchMovies = (search) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=33997e27d6abf922adb70f5dc0f0c135&query=${search}`
      )
      .then((res) => {
        const { results } = res.data;

        console.log(results);

        const finalResults = [];
        results.forEach((record) => {
          const { release_date } = record;
          let releaseYear = "";

          release_date
            ? (releaseYear = ` (${release_date.split("-")[0]})`)
            : null;

          finalResults.push(record);
        });

        setMovieResults([...finalResults]);
      });
  };

  const handleSearch = (newValue) => {
    fetchMovies(newValue);
  };

  const handleSelect = (selectedValue) => {
    dispatch(answerGuessed());
    // if (!answers.includes(selectedValue)) {
    //   dispatch(
    //     addAnswer({
    //       cellLabel,
    //       selectedMovie: selectedValue,
    //     })
    //   );
    // }
  };

  const handleChange = (newValue) => {
    console.log("handle change");
  };

  console.log("Movie results: ", movieResults);
  return (
    <>
      <div onClick={onCellClick} className="Cell">
        <div className="Cell-box-wrapper">
          <div className="Cell-box">{label}</div>
        </div>

        {leftImg && (
          <div className="Cell-left-img-with-text-wrapper">
            {leftAttrLink ? (
              <Link href={leftAttrLink} alt={left} target="_blank">
                <Image src={leftImg} alt={left} width={70} height={70} />
              </Link>
            ) : (
              <Image src={leftImg} alt={left} width={70} height={70} />
            )}
            <p className="Cell-left-img-text">{left}</p>
          </div>
        )}

        {topImg && (
          <div className="Cell-top-img-with-text-wrapper">
            <div>
              <p className="Cell-top-img-text">{top}</p>
              {topAttrLink ? (
                <Link href={topAttrLink} alt={top} target="_blank">
                  <Image src={topImg} alt={top} width={70} height={70} />
                </Link>
              ) : (
                <Image src={topImg} alt={top} width={70} height={70} />
              )}
            </div>
          </div>
        )}

        {!leftImg && left && (
          <div className="Cell-left-text-wrapper">
            <p className="Cell-left-text">{left}</p>
          </div>
        )}

        {!topImg && top && (
          <div className="Cell-top-text-wrapper">
            <p className="Cell-top-text">{top}</p>
          </div>
        )}
      </div>

      <Modal
        title="Make a guess"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <>
          <p className="Cell-modal-info-text">
            Select the movie to record your answer
          </p>
          <div className="Cell-modal-select-movies-wrapper">
            <Select
              showSearch
              value={value}
              placeholder="Search movie as exact as possible"
              className="Cell-modal-select-movies"
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
        </>
      </Modal>
    </>
  );
}

export default Cell;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Modal, Select } from "antd";
import cn from "classnames";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
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
  const { cellsImages, guesses, moviesGuessed } = useSelector(
    (state) => state.puzzle
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState();
  const [movieResults, setMovieResults] = useState([]);

  const dispatch = useDispatch();

  const id = cellsImages[label].id;
  const imageLink = cellsImages[label].image;
  const attributionLink = cellsImages[label].attributionLink;

  useEffect(() => {
    if (imageLink !== "") {
      setIsModalOpen(false);
    }
  }, [imageLink]);

  useEffect(() => {
    if (guesses === 0) {
      isModalOpen && setIsModalOpen(false);
    }
  }, [guesses]);

  const onCellClick = () => {
    imageLink === "" && guesses > 0 && setIsModalOpen(true);
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
    if (selectedValue !== "used") {
      const [id, poster_path] = selectedValue.split("~!~");
      dispatch(answerGuessed({ label, id, poster_path }));
    }
  };

  const handleChange = (newValue) => {
    console.log("handle change");
  };

  return (
    <>
      <div onClick={onCellClick} className="Cell">
        <div className="Cell-box-wrapper">
          <div
            className={cn("Cell-box", {
              "Cell-box-A": label === "A",
              "Cell-box-C": label === "C",
              "Cell-box-G": label === "G",
              "Cell-box-I": label === "I",
            })}
          >
            {imageLink !== "" ? (
              <Link href={attributionLink} target="_blank">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${imageLink}`}
                  width={142}
                  height={142}
                  alt="fdsf"
                />
              </Link>
            ) : null}
          </div>
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
            Select a movie to record your answer
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
                const { id, title, release_date, poster_path } = m;
                let releaseYear = "";

                release_date
                  ? (releaseYear = ` (${release_date.split("-")[0]})`)
                  : null;

                let value = `${id}~!~${poster_path}`;

                let movieAlreadyGuessed = false;

                {
                  moviesGuessed.includes(id.toString())
                    ? (movieAlreadyGuessed = true)
                    : null;
                }

                {
                  movieAlreadyGuessed ? (value = "used") : null;
                }

                const labelJSX = (
                  <div className="Cell-modal-select-movies-item-label-jsx">
                    <p>
                      {title}
                      {releaseYear}
                    </p>
                    <p>{movieAlreadyGuessed ? "Already Used" : ""}</p>
                  </div>
                );

                return {
                  value: value,
                  label: labelJSX,
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

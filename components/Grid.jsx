"use client";

import { useState, useEffect } from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import Cell from "./Cell";
import Summary from "./Summary";
import _ from "lodash";
import axios from "axios";

function Grid() {
  const puzzle = useSelector((state) => state.puzzle);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { _id, labels, guesses, cellsImages, puzzleFinished } = puzzle;

  const { x1, x2, x3, y1, y2, y3 } = labels;

  useEffect(() => {
    if (puzzleFinished === true) {
      setIsModalOpen(true);

      const cellLabels = Object.keys(cellsImages);

      const foundRecords = [];

      cellLabels.forEach((label) => {
        if (cellsImages[label].image !== "") {
          foundRecords.push(1);
        }
      });

      const score = _.sum(foundRecords);

      axios
        .put("https://fill-m-next-ts-app.vercel.app/api/puzzles", {
          id: _id,
          score,
        })
        // .put("http://localhost:3000/api/puzzles", { id: _id, score })
        .then((response) => {
          console.log(response);
        });
    }
  }, [puzzleFinished]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="Grid">
      <div>
        <div className="Grid-wrapper">
          <div className="Grid-box">
            <div className="Grid-box-row">
              {/* x1y1 */}
              <Cell
                top={y1.label}
                topImg={y1.image}
                topAttrLink={y1.attributionLink}
                left={x1.label}
                leftImg={x1.image}
                leftAttrLink={x1.attributionLink}
                label="A"
              />
              {/* x1y2 */}
              <Cell
                top={y2.label}
                topImg={y2.image}
                topAttrLink={y2.attributionLink}
                label="B"
              />
              {/* x1y3 */}
              <Cell
                top={y3.label}
                topImg={y3.image}
                topAttrLink={y3.attributionLink}
                label="C"
              />
            </div>
            <div className="Grid-box-row">
              {/* x2y1 */}
              <Cell
                left={x2.label}
                leftImg={x2.image}
                leftAttrLink={x2.attributionLink}
                label="D"
              />
              {/* x2y2 */}
              <Cell label="E" />
              {/* x2y3 */}
              <Cell label="F" />
            </div>
            <div className="Grid-box-row">
              {/* x3y1 */}
              <Cell
                left={x3.label}
                leftImg={x3.image}
                leftAttrLink={x3.attributionLink}
                label="G"
              />
              {/* x3y2 */}
              <Cell label="H" />
              {/* x3y3 */}
              <Cell label="I" />
            </div>
          </div>
          <div className="Grid-guess-wrapper">
            {puzzleFinished && (
              <p
                onClick={() => setIsModalOpen(true)}
                className="Grid-view-result-text"
              >
                View Result
              </p>
            )}
            <p>Guesses Left</p>
            <p>{guesses}</p>
          </div>
        </div>
      </div>

      <Modal
        title={
          <p style={{ textAlign: "center", fontWeight: "bold" }}>SUMMARY</p>
        }
        open={true}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <>
          <Summary />
        </>
      </Modal>
    </section>
  );
}

export default Grid;

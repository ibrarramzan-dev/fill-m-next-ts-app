"use client";

import { useSelector } from "react-redux";
import puzzles from "@/db/puzzles.json";
import Cell from "./Cell";

function Grid() {
  const puzzle = puzzles[0];
  const { labels } = puzzle;

  const { y1, y2, y3, x1, x2, x3 } = useSelector(
    (state) => state.admin.puzzle.labels
  );

  console.log("Labels: ", labels);

  const onCellClick = () => console.log("cell clicked");

  return (
    <section className="AdminGrid">
      <div>
        <div className="AdminGrid-wrapper">
          <div className="AdminGrid-box">
            <div className="AdminGrid-box-row">
              {/* x1y1 */}
              <Cell
                top={y1.label}
                topImg={y1.image}
                left={x1.label}
                leftImg={x1.image}
                onCellClick={onCellClick}
              />
              {/* x1y2 */}
              <Cell
                top={y2.label}
                topImg={y2.image}
                onCellClick={onCellClick}
              />
              {/* x1y3 */}
              <Cell
                top={y3.label}
                topImg={y3.image}
                onCellClick={onCellClick}
              />
            </div>
            <div className="AdminGrid-box-row">
              {/* x2y1 */}
              <Cell
                left={x2.label}
                leftImg={x2.image}
                onCellClick={onCellClick}
              />
              {/* x2y2 */}
              <Cell onCellClick={onCellClick} />
              {/* x2y3 */}
              <Cell onCellClick={onCellClick} />
            </div>
            <div className="AdminGrid-box-row">
              {/* x3y1 */}
              <Cell
                left={x3.label}
                leftImg={x3.image}
                onCellClick={onCellClick}
              />
              {/* x3y2 */}
              <Cell onCellClick={onCellClick} />
              {/* x3y3 */}
              <Cell onCellClick={onCellClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;

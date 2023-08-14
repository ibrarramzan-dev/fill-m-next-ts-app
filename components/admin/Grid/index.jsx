"use client";

import puzzles from "@/db/puzzles.json";
import Cell from "./Cell";

function Grid() {
  const puzzle = puzzles[0];
  const { labels } = puzzle;

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
                top={labels.y1}
                left={labels.x1}
                topLeft=""
                onCellClick={onCellClick}
              />
              {/* x1y2 */}
              <Cell top={labels.y2} onCellClick={onCellClick} />
              {/* x1y3 */}
              <Cell top={labels.y3} onCellClick={onCellClick} />
            </div>
            <div className="AdminGrid-box-row">
              {/* x2y1 */}
              <Cell left={labels.x2} onCellClick={onCellClick} />
              {/* x2y2 */}
              <Cell onCellClick={onCellClick} />
              {/* x2y3 */}
              <Cell onCellClick={onCellClick} />
            </div>
            <div className="AdminGrid-box-row">
              {/* x3y1 */}
              <Cell left={labels.x3} onCellClick={onCellClick} />
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

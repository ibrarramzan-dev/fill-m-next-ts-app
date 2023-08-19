"use client";

import Cell from "./Cell";

function Grid() {
  const puzzle = {
    labels: {
      x1: "Dennis Quaid",
      x2: "Meryl Streep",
      x3: "Amy Adams",
      y1: "Jake Gyllenhaal",
      y2: "Michael Douglas",
      y3: "Julia Roberts",
    },
    data: {},
  };
  const { labels } = puzzle;

  const onCellClick = () => console.log("cell clicked");

  return (
    <section className="Grid">
      <div>
        <div className="Grid-wrapper">
          <div className="Grid-box">
            <div className="Grid-box-row">
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
            <div className="Grid-box-row">
              {/* x2y1 */}
              <Cell left={labels.x2} onCellClick={onCellClick} />
              {/* x2y2 */}
              <Cell onCellClick={onCellClick} />
              {/* x2y3 */}
              <Cell onCellClick={onCellClick} />
            </div>
            <div className="Grid-box-row">
              {/* x3y1 */}
              <Cell left={labels.x3} onCellClick={onCellClick} />
              {/* x3y2 */}
              <Cell onCellClick={onCellClick} />
              {/* x3y3 */}
              <Cell onCellClick={onCellClick} />
            </div>
          </div>
          <div className="Grid-guess-wrapper">
            <p>Guesses Left</p>
            <p>9</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;

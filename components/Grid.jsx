"use client";

import { useSelector } from "react-redux";
import Cell from "./Cell";

function Grid() {
  const puzzle = useSelector((state) => state.puzzle);

  console.log(puzzle);
  const { labels, guesses } = puzzle;

  const { x1, x2, x3, y1, y2, y3 } = labels;

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
            <p>Guesses Left</p>
            <p>{guesses}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;

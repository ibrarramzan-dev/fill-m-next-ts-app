"use client";

import { useSelector } from "react-redux";
import SummaryCell from "./SummaryCell";

function SummaryGrid() {
  const cellsImages = useSelector((state) => state.puzzle.cellsImages);

  const { A, B, C, D, E, F, G, H, I } = cellsImages;

  return (
    <section className="SummaryGrid">
      <div>
        <div className="SummaryGrid-wrapper">
          <div className="SummaryGrid-box">
            <div className="SummaryGrid-box-row">
              {/* x1y1 */}
              <SummaryCell imagePoster={A.image} />
              {/* x1y2 */}
              <SummaryCell imagePoster={B.image} />
              {/* x1y3 */}
              <SummaryCell imagePoster={C.image} />
            </div>
            <div className="SummaryGrid-box-row">
              {/* x2y1 */}
              <SummaryCell imagePoster={D.image} />
              {/* x2y2 */}
              <SummaryCell imagePoster={E.image} />
              {/* x2y3 */}
              <SummaryCell imagePoster={F.image} />
            </div>
            <div className="SummaryGrid-box-row">
              {/* x3y1 */}
              <SummaryCell imagePoster={G.image} />
              {/* x3y2 */}
              <SummaryCell imagePoster={H.image} />
              {/* x3y3 */}
              <SummaryCell imagePoster={I.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummaryGrid;

import SummaryCell from "./SummaryCell";

function SummaryGrid() {
  return (
    <section className="SummaryGrid">
      <div>
        <div className="SummaryGrid-wrapper">
          <div className="SummaryGrid-box">
            <div className="SummaryGrid-box-row">
              {/* x1y1 */}
              <SummaryCell />
              {/* x1y2 */}
              <SummaryCell />
              {/* x1y3 */}
              <SummaryCell />
            </div>
            <div className="SummaryGrid-box-row">
              {/* x2y1 */}
              <SummaryCell />
              {/* x2y2 */}
              <SummaryCell />
              {/* x2y3 */}
              <SummaryCell />
            </div>
            <div className="SummaryGrid-box-row">
              {/* x3y1 */}
              <SummaryCell />
              {/* x3y2 */}
              <SummaryCell />
              {/* x3y3 */}
              <SummaryCell />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummaryGrid;

"use client";

import cn from "classnames";
import { useSelector } from "react-redux";
import SummaryMetricCell from "./SummaryMetricCell";

function SummaryMetricGrid({ cellJSX, fromSection }) {
  const { labels } = useSelector((state) => state.puzzle);

  const { x1, x2, x3, y1, y2, y3 } = labels;

  return (
    <section
      className={cn("SummaryMetricGrid", {
        "SummaryMetricGrid-left-img-with-text-detected":
          (x1.image || x2.image || x3.image) &&
          (x1.label || x2.label || x3.label),
        "SummaryMetricGrid-top-img-with-text-detected":
          (y1.image || y2.image || y3.image) &&
          (y1.label || y2.label || y3.label),
        "SummaryMetricGrid-left-text-detected":
          !x1.image &&
          x1.label &&
          !x2.image &&
          x2.label &&
          !x3.image &&
          x3.label,
        "SummaryMetricGrid-top-text-detected":
          !y1.image &&
          y1.label &&
          !y2.image &&
          y2.label &&
          !y3.image &&
          y3.label,
        "SummaryMetricGrid-left-img-detected":
          x1.image &&
          !x1.label &&
          x2.image &&
          !x2.label &&
          x3.image &&
          !x3.label,
        "SummaryMetricGrid-only-img-detected":
          (x1.image && !x1.label) ||
          (x2.image && !x2.label) ||
          (x3.image && !x3.label),
      })}
    >
      <div>
        {(y1.image || y2.image || y3.image) &&
        !y1.label &&
        !y2.label &&
        !y3.label ? (
          <br />
        ) : ((y1.image || y2.image || y3.image) && y1.label) ||
          y2.label ||
          y3.label ? (
          <>
            <br />
            <br />
            <br />
            <br />
          </>
        ) : null}
        <div className="SummaryMetricGrid-wrapper">
          <div className="SummaryMetricGrid-box">
            <div className="SummaryMetricGrid-box-row">
              {/* x1y1 */}
              <SummaryMetricCell
                top={y1.label}
                topImg={y1.image}
                topAttrLink={y1.attributionLink}
                left={x1.label}
                leftImg={x1.image}
                leftAttrLink={x1.attributionLink}
                label="A"
                cellJSX={cellJSX}
                fromSection={fromSection}
              />
              {/* x1y2 */}
              <SummaryMetricCell
                top={y2.label}
                topImg={y2.image}
                topAttrLink={y2.attributionLink}
                label="B"
                cellJSX={cellJSX}
                fromSection={fromSection}
              />
              {/* x1y3 */}
              <SummaryMetricCell
                top={y3.label}
                topImg={y3.image}
                topAttrLink={y3.attributionLink}
                label="C"
                cellJSX={cellJSX}
                fromSection={fromSection}
              />
            </div>
            <div className="SummaryMetricGrid-box-row">
              {/* x2y1 */}
              <SummaryMetricCell
                left={x2.label}
                leftImg={x2.image}
                leftAttrLink={x2.attributionLink}
                label="D"
                cellJSX={cellJSX}
                fromSection={fromSection}
              />
              {/* x2y2 */}
              <SummaryMetricCell
                label="E"
                cellJSX={cellJSX}
                fromSection={fromSection}
              />
              {/* x2y3 */}
              <SummaryMetricCell
                label="F"
                cellJSX={cellJSX}
                fromSection={fromSection}
              />
            </div>
            <div className="SummaryMetricGrid-box-row">
              {/* x3y1 */}
              <SummaryMetricCell
                left={x3.label}
                leftImg={x3.image}
                leftAttrLink={x3.attributionLink}
                label="G"
                cellJSX={cellJSX}
                fromSection={fromSection}
              />
              {/* x3y2 */}
              <SummaryMetricCell
                label="H"
                cellJSX={cellJSX}
                fromSection={fromSection}
              />
              {/* x3y3 */}
              <SummaryMetricCell
                label="I"
                cellJSX={cellJSX}
                fromSection={fromSection}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SummaryMetricGrid;

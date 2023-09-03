import SummaryMetricGrid from "./SummaryMetricGrid";

function Accuracy() {
  const cellJSX = (
    <div className="Accuracy-cell-wrapper">
      <p className="Accuracy-cell-percentage">51%</p>
    </div>
  );

  return (
    <div className="Accuracy">
      <h3>Accuracy</h3>

      <SummaryMetricGrid cellJSX={cellJSX} />
    </div>
  );
}

export default Accuracy;

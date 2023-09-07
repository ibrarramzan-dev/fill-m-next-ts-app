import SummaryMetricGrid from "./SummaryMetricGrid";

const cellJSX = (accuracy) => {
  {
    isNaN(accuracy) ? (accuracy = 0) : null;
  }

  return (
    <div className="Accuracy-cell-wrapper">
      <p className="Accuracy-cell-percentage">{Math.round(accuracy)}%</p>
    </div>
  );
};

function Accuracy() {
  return (
    <div className="Accuracy">
      <h3>Accuracy</h3>

      <SummaryMetricGrid cellJSX={cellJSX} fromSection="accuracy" />
    </div>
  );
}

export default Accuracy;

import SummaryMetricGrid from "./SummaryMetricGrid";

function PossibleAnswers() {
  const cellJSX = (
    <div className="PossibleAnswers-cell-wrapper">
      <div>
        <p>200</p>
        <p>(Show)</p>
      </div>
    </div>
  );

  return (
    <div className="PossibleAnswers">
      <h3>Possible Answers</h3>

      <p className="PossibleAnswers-tap-show-info-text">
        Tap &apos;Show&apos; to see a list of possible answers.
      </p>

      <SummaryMetricGrid cellJSX={cellJSX} />
    </div>
  );
}

export default PossibleAnswers;

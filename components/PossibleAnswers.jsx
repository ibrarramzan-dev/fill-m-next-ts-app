import SummaryMetricGrid from "./SummaryMetricGrid";

function PossibleAnswers() {
  return (
    <div className="PossibleAnswers">
      <h3>Possible Answers</h3>

      <p className="PossibleAnswers-tap-show-info-text">
        Tap &apos;Show&apos; to see a list of possible answers.
      </p>

      <SummaryMetricGrid />
    </div>
  );
}

export default PossibleAnswers;

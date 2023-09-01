import SummaryGrid from "./SummaryGrid";
import TodaysMovieGridStats from "./TodaysMovieGridStats";
import PossibleAnswers from "./PossibleAnswers";

function Summary() {
  return (
    <div className="Summary">
      <SummaryGrid />
      <TodaysMovieGridStats />
      <PossibleAnswers />
    </div>
  );
}

export default Summary;

import SummaryGrid from "./SummaryGrid";
import TodaysMovieGridStats from "./TodaysMovieGridStats";
import PossibleAnswers from "./PossibleAnswers";
import MostPopular from "./MostPopular";
import Accuracy from "./Accuracy";
import PlayerScores from "./PlayerScores";

function Summary() {
  return (
    <div className="Summary">
      <SummaryGrid />
      <TodaysMovieGridStats />
      <PossibleAnswers />
      <MostPopular />
      <Accuracy />
      <PlayerScores />
    </div>
  );
}

export default Summary;

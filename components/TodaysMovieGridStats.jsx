import { useSelector } from "react-redux";

function TodaysMovieGridStats() {
  const scores = useSelector((state) => state.puzzle.stats.score);

  let totalGames = 0;
  let totalScoreByAllPlayers = 0;

  Object.keys(scores).forEach((score) => {
    totalScoreByAllPlayers += score * scores[score];
    totalGames += scores[score];
  });

  let avgScore = totalScoreByAllPlayers / totalGames;

  return (
    <div className="TodaysMovieGridStats">
      <h3>Today’s Fill-M Stats</h3>
      <div className="TodaysMovieGridStats-wrapper">
        <div>
          <p>GAMES</p>
          <p>{totalGames}</p>
        </div>

        <div>
          <p>AVERAGE SCORE</p>
          <p>{avgScore}</p>
        </div>
      </div>
    </div>
  );
}

export default TodaysMovieGridStats;

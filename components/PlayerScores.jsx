import { Chart } from "react-google-charts";

const data = [
  ["SCORE", "PLAYERS"],
  ["0", 4199],
  ["1", 9543],
  ["2", 12633],
  ["3", 10341],
  ["4", 9349],
  ["5", 8483],
  ["6", 7359],
  ["7", 7068],
  ["8", 6321],
  ["9", 12159],
];

function PlayerScores() {
  return (
    <div className="PlayerScores">
      <h3 className="PlayerScores-heading">Player Scores</h3>

      <Chart chartType="Bar" width="100%" height="400px" data={data} />
    </div>
  );
}

export default PlayerScores;

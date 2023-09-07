import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        precision: 0,
      },
    },
  },
};

const labels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const data = {
  labels,
  datasets: [
    {
      label: "PLAYERS",
      data: [],
      backgroundColor: "#fd328adc",
    },
  ],
};

function PlayerScores() {
  const scores = useSelector((state) => state.puzzle.stats.score);

  Object.keys(scores).forEach((score) => {
    data.datasets[0].data.push(scores[score]);
  });

  return (
    <div className="PlayerScores">
      <h3 className="PlayerScores-heading">Player Scores</h3>

      <Bar options={options} data={data} />
    </div>
  );
}

export default PlayerScores;

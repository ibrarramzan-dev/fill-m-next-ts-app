import { useSelector } from "react-redux";
import Image from "next/image";
import SummaryMetricGrid from "./SummaryMetricGrid";

const cellJSX = (movie) => (
  <div className="MostPopular-cell-wrapper">
    <Image
      src={`https://image.tmdb.org/t/p/original/${movie.image}`}
      alt="Most Popular"
      width="50"
      height="50"
    />
    <p className="MostPopular-cell-percentage">100%</p>
    <p className="MostPopular-cell-movie-title">{movie.movie}</p>
  </div>
);

function MostPopular() {
  const guesses = useSelector((state) => state.puzzle.stats.guesses);

  console.log("Guesses: ", guesses);

  return (
    <div className="MostPopular">
      <h3>Most Popular</h3>

      <p className="MostPopular-tap-a-movie-info-text">
        Tap a movie to see their Movie Reference page.
      </p>

      <SummaryMetricGrid cellJSX={cellJSX} fromSection="most-popular" />
    </div>
  );
}

export default MostPopular;

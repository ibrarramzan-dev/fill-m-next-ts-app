import Image from "next/image";
import SummaryMetricGrid from "./SummaryMetricGrid";

function MostPopular() {
  const cellJSX = (
    <div className="MostPopular-cell-wrapper">
      <Image
        src="https://image.tmdb.org/t/p/original/nb1MLEOXVFBKTM4J9GLoksqgDBk.jpg"
        alt="Most Popular"
        width="50"
        height="50"
      />
      <p className="MostPopular-cell-percentage">100%</p>
      <p className="MostPopular-cell-movie-title">Elemetal (2023)</p>
    </div>
  );

  return (
    <div className="MostPopular">
      <h3>Most Popular</h3>

      <p className="MostPopular-tap-a-movie-info-text">
        Tap a movie to see their Movie Reference page.
      </p>

      <SummaryMetricGrid cellJSX={cellJSX} />
    </div>
  );
}

export default MostPopular;

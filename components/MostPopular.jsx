import SummaryMetricGrid from "./SummaryMetricGrid";

function MostPopular() {
  return (
    <div className="MostPopular">
      <h3>Most Popular</h3>

      <p className="MostPopular-tap-a-movie-info-text">
        Tap a movie to see their Movie Reference page.
      </p>

      <SummaryMetricGrid />
    </div>
  );
}

export default MostPopular;

import Link from "next/link";
import Popup from "reactjs-popup";
import SummaryMetricGrid from "./SummaryMetricGrid";

const cellJSX = (movies) => (
  <div className="PossibleAnswers-cell-wrapper">
    <div>
      <p className="PossibleAnswers-cell-answers-count">{movies.length}</p>
      <Popup
        className="PossibleAnswers-cell-show-answers-popup"
        trigger={<p className="PossibleAnswers-cell-show-text">(Show)</p>}
        position="top center"
      >
        <div className="PossibleAnswers-cell-answers-popup-items-wrapper">
          {movies.map((movie) => (
            <Link
              href={movie.attributionLink}
              target="_blank"
              key={movie.movie}
            >
              <div className="PossibleAnswers-cell-answers-popup-item-pill">
                {movie.movie}
              </div>
            </Link>
          ))}
        </div>
      </Popup>
    </div>
  </div>
);

function PossibleAnswers() {
  return (
    <div className="PossibleAnswers">
      <h3>Possible Answers</h3>

      <p className="PossibleAnswers-tap-show-info-text">
        Tap &apos;Show&apos; to see a list of possible answers.
      </p>

      <SummaryMetricGrid cellJSX={cellJSX} fromSection="possible-answers" />
    </div>
  );
}

export default PossibleAnswers;

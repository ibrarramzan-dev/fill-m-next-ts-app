import Link from "next/link";

function Rules() {
  return (
    <div className="Rules">
      <p>
        QUIET ON THE SET PLEASE!!! <br />
      </p>
      <p className="Rules-and-action-text">
        <b>Aaaaaaand…..action!</b> <br />
      </p>
      <p>
        Welcome to Fill-M, a grid-style daily game for actors, movies, awards,
        and anything feature-film related! We’re inspired by Wordle, Immaculate
        Grid, Framed, and more! <br />
      </p>
      <p className="Rules-how-to-play-text">
        <u>How to play Fill-M</u> <br />
      </p>
      <p>
        Will some answers be easy? Sure! Will some be pretty darn difficult?
        Yeah, probably. Keep in mind that many cells will only have one popular
        answer as this is the nature of building this type of puzzle. <br />
      </p>
      <p>
        Puzzles will get progressively more difficult throughout each week with
        the easiest puzzle on Monday up to the most difficult puzzle on Sunday.
      </p>
      <p>
        Select a movie for each cell that matches the intersecting row and
        column criteria. You have nine guesses to fill out Fill-M, and every
        guess, regardless of result, counts as a guess.
      </p>
      <p>A new game is released daily at 8:00 PM EST.</p>
      <p>A movie cannot be used twice.</p>
      <p>Movies answer options will only be feature-length films.</p>
      <p>There are no Shorts, TV Movies, or Documentaries in Fill-M.</p>
      <p>
        For actor cells, the actor may be credited or uncredited in the movie.
      </p>
      <p>
        For Oscar Award Winner/Nominee cells, the actor simply has to be in the
        movie that won the award unless it is specified that they themselves won
        the award for being in the movie (i.e.: for Best Actor/Actress awards).
      </p>

      <p>
        All Box Office data is courtesy of{" "}
        <Link href="https://www.the-numbers.com/" target="_blank">
          https://www.the-numbers.com/
        </Link>
        . Please submit any game feedback or ideas to fill.m.grid@gmail.com or
        via twitter @FillMGame
      </p>
    </div>
  );
}

export default Rules;

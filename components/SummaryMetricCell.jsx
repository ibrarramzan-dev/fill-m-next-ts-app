"use client";

import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import cn from "classnames";
import _ from "lodash";

function SummaryMetricCell({
  top,
  topImg,
  topAttrLink,
  left,
  leftImg,
  leftAttrLink,
  label,
  cellJSX,
  fromSection,
}) {
  const { stats, answers } = useSelector((state) => state.puzzle);
  const guesses = stats.guesses;

  const movies = _.omit(guesses[label], ["notGuessed"]);

  const movieRecords = Object.values(movies);

  console.log(movieRecords);
  const maxCountMovie = _.maxBy(movieRecords, "count");
  const totalAnswered = _.sumBy(movieRecords, "count");

  const mostPopularPercent = (maxCountMovie.count / totalAnswered) * 100;

  return (
    <>
      <div className="SummaryMetricCell">
        <div className="SummaryMetricCell-box-wrapper">
          <div
            className={cn("SummaryMetricCell-box", {
              "SummaryMetricCell-box-A": label === "A",
              "SummaryMetricCell-box-C": label === "C",
              "SummaryMetricCell-box-G": label === "G",
              "SummaryMetricCell-box-H": label === "H",
              "SummaryMetricCell-box-I": label === "I",
            })}
          >
            {fromSection === "possible-answers"
              ? cellJSX(answers[label])
              : fromSection === "most-popular"
              ? cellJSX({ ...maxCountMovie, percent: mostPopularPercent })
              : null}
          </div>
        </div>

        {leftImg && (
          <div
            className={cn("SummaryMetricCell-left-img-with-text-wrapper", {
              "SummaryMetricCell-left-img-with-no-text": left === "",
            })}
          >
            {leftAttrLink ? (
              <Link href={leftAttrLink} alt={left} target="_blank">
                <Image src={leftImg} alt={left} width={70} height={70} />
              </Link>
            ) : (
              <Image src={leftImg} alt={left} width={70} height={70} />
            )}
            <p className="SummaryMetricCell-left-img-text">{left}</p>
          </div>
        )}

        {topImg && (
          <div className="SummaryMetricCell-top-img-with-text-wrapper">
            <div>
              <p className="SummaryMetricCell-top-img-text">{top}</p>
              {topAttrLink ? (
                <Link href={topAttrLink} alt={top} target="_blank">
                  <Image src={topImg} alt={top} width={70} height={70} />
                </Link>
              ) : (
                <Image src={topImg} alt={top} width={70} height={70} />
              )}
            </div>
          </div>
        )}

        {!leftImg && left && (
          <div className="SummaryMetricCell-left-text-wrapper">
            <p className="SummaryMetricCell-left-text">{left}</p>
          </div>
        )}

        {!topImg && top && (
          <div className="SummaryMetricCell-top-text-wrapper">
            <p className="SummaryMetricCell-top-text">{top}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default SummaryMetricCell;

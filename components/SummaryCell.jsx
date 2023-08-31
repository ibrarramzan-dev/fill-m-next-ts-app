import cn from "classnames";

function SummaryCell({ imagePoster }) {
  return (
    <div className="SummaryCell">
      <div
        className={cn("SummaryCell-box-wrapper", {
          "SummaryCell-box-active": imagePoster !== "",
        })}
      ></div>
    </div>
  );
}

export default SummaryCell;

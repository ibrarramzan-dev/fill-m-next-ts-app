function Cell({ top, left, onCellClick }) {
  return (
    <div className="AdminCell">
      <div className="AdminCell-box-wrapper">
        <div className="AdminCell-box" onClick={onCellClick} />
      </div>
      {top && <p className="AdminCell-top-text">{top}</p>}
      {left && <p className="AdminCell-left-text">{left}</p>}
    </div>
  );
}

export default Cell;

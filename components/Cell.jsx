function Cell({ top, left, onCellClick }) {
  return (
    <div className="Cell">
      <div className="Cell-box-wrapper">
        <div className="Cell-box" onClick={onCellClick} />
      </div>
      {top && <p className="Cell-top-text">{top}</p>}
      {left && <p className="Cell-left-text">{left}</p>}
    </div>
  );
}

export default Cell;

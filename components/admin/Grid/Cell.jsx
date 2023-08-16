"use client";

import Image from "next/image";

function Cell({ top, topImg, left, leftImg, onCellClick }) {
  return (
    <div className="AdminCell">
      <div className="AdminCell-box-wrapper">
        <div className="AdminCell-box" onClick={onCellClick} />
      </div>

      {leftImg && (
        <div className="AdminCell-left-img-with-text-wrapper">
          <p className="AdminCell-left-img-text">{left}</p>
          <Image src={leftImg} alt={left} width={70} height={70} />
        </div>
      )}

      {topImg && (
        <div className="AdminCell-top-img-with-text-wrapper">
          <p className="AdminCell-top-img-text">{top}</p>
          <Image src={topImg} alt={top} width={70} height={70} />
        </div>
      )}
      {/* 
      {!topImg && <p className="AdminCell-top-text">{top}</p>}
      {!leftImg && <p className="AdminCell-left-text">{left}</p>} */}
    </div>
  );
}

export default Cell;

"use client";

import Image from "next/image";
import Link from "next/link";

function Cell({
  top,
  topImg,
  topAttrLink,
  left,
  leftImg,
  leftAttrLink,
  label,
  onCellClick,
}) {
  return (
    <>
      <div className="Cell">
        <div className="Cell-box-wrapper">
          <div className="Cell-box">{label}</div>
        </div>

        {leftImg && (
          <div className="Cell-left-img-with-text-wrapper">
            {leftAttrLink ? (
              <Link href={leftAttrLink} alt={left} target="_blank">
                <Image src={leftImg} alt={left} width={70} height={70} />
              </Link>
            ) : (
              <Image src={leftImg} alt={left} width={70} height={70} />
            )}
            <p className="Cell-left-img-text">{left}</p>
          </div>
        )}

        {topImg && (
          <div className="Cell-top-img-with-text-wrapper">
            <div>
              <p className="Cell-top-img-text">{top}</p>
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
          <div className="Cell-left-text-wrapper">
            <p className="Cell-left-text">{left}</p>
          </div>
        )}

        {!topImg && top && (
          <div className="Cell-top-text-wrapper">
            <p className="Cell-top-text">{top}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cell;

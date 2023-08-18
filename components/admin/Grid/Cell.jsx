"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import FeedMovies from "@/components/admin/FeedMovies";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="AdminCell" onClick={() => setIsOpen(true)}>
        <div className="AdminCell-box-wrapper">
          <div className="AdminCell-box" onClick={onCellClick}>
            {label}
          </div>
        </div>

        {leftImg && (
          <div className="AdminCell-left-img-with-text-wrapper">
            {leftAttrLink ? (
              <Link href={leftAttrLink} alt={left} target="_blank">
                <Image src={leftImg} alt={left} width={70} height={70} />
              </Link>
            ) : (
              <Image src={leftImg} alt={left} width={70} height={70} />
            )}
            <p className="AdminCell-left-img-text">{left}</p>
          </div>
        )}

        {topImg && (
          <div className="AdminCell-top-img-with-text-wrapper">
            <div>
              <p className="AdminCell-top-img-text">{top}</p>
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
          <div className="AdminCell-left-text-wrapper">
            <p className="AdminCell-left-text">{left}</p>
          </div>
        )}

        {!topImg && top && (
          <div className="AdminCell-top-text-wrapper">
            <p className="AdminCell-top-text">{top}</p>
          </div>
        )}
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        direction="right"
        className="Drawer-component"
      >
        <FeedMovies cellLabel={label} />
      </Drawer>
    </>
  );
}

export default Cell;

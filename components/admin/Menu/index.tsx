"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  UnorderedListOutlined,
  PlusOutlined,
  BorderOuterOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

export default function Menu() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isSidebarOpened = useSelector(
    (state: any) => state.admin.dashboard.isSidebarOpened
  );

  console.log(isSidebarOpened);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuListUlRef = useRef<HTMLUListElement>(null);

  const newPuzzleItemRef = useRef<HTMLSpanElement>(null);
  const allPuzzlesItemRef = useRef<HTMLSpanElement>(null);
  const newMovieItemRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  if (width >= 1024) {
    if (menuListUlRef.current) {
      menuListUlRef.current.style.justifyContent = "left";
      menuListUlRef.current.style.paddingLeft = "0";
    }
  }

  if (isSidebarOpened) {
    if (
      menuRef.current &&
      menuListUlRef.current &&
      newPuzzleItemRef.current &&
      allPuzzlesItemRef.current &&
      newMovieItemRef.current
    ) {
      menuRef.current.style.display = "flex";
      menuRef.current.style.justifyContent = "left";
      menuRef.current.style.paddingTop = "0";
      menuRef.current.style.width = "76vw";
      menuRef.current.style.top = "auto";
      menuRef.current.style.zIndex = "5000";

      menuListUlRef.current.style.display = "flex";
      menuListUlRef.current.style.width = "100%";
      menuListUlRef.current.style.overflow = "hidden";
      menuListUlRef.current.style.overflowX = "auto";
      menuListUlRef.current.style.border = "none";

      newPuzzleItemRef.current.style.display = "inline";

      allPuzzlesItemRef.current.style.display = "inline";

      newMovieItemRef.current.style.display = "inline";
    }
  } else if (
    !isSidebarOpened &&
    menuRef.current &&
    newPuzzleItemRef.current &&
    allPuzzlesItemRef.current &&
    newMovieItemRef.current
  ) {
    menuRef.current.style.display = "none";
  }

  return (
    <div ref={menuRef} className="Menu-container">
      <ul ref={menuListUlRef} className="Menu-nav">
        <MenuItem
          ref={newPuzzleItemRef}
          icon={<BorderOuterOutlined />}
          text="New puzzle"
          path="/admin/new-puzzle"
        />

        <MenuItem
          ref={allPuzzlesItemRef}
          icon={<UnorderedListOutlined />}
          text="All puzzles"
          path="/admin/puzzles"
        />

        <MenuItem
          ref={newMovieItemRef}
          icon={<PlusOutlined />}
          text="New movie"
          path="/admin/new-movie"
        />
      </ul>
    </div>
  );
}

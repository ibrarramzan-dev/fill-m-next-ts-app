"use client";

import React, { useEffect, useRef, useState } from "react";
import project from "./images/icon-dots.svg";
import list from "./images/icon-list.svg";
import { useSelector } from "react-redux";
// import MenuBtnContext from "../../../context/menuBtnContext"
import MenuPrimaryItem from "./MenuPrimaryItem";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  UserOutlined,
  BorderOuterOutlined,
} from "@ant-design/icons";

export default function MenuPrimary() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isSidebarOpened = useSelector(
    (state: any) => state.admin.dashboard.isSidebarOpened
  );

  console.log(isSidebarOpened);

  const menuPrimaryRef = useRef<HTMLDivElement>(null);
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
      menuPrimaryRef.current &&
      menuListUlRef.current &&
      newPuzzleItemRef.current &&
      allPuzzlesItemRef.current &&
      newMovieItemRef.current
    ) {
      menuPrimaryRef.current.style.display = "flex";
      menuPrimaryRef.current.style.justifyContent = "left";
      menuPrimaryRef.current.style.paddingTop = "0";
      menuPrimaryRef.current.style.width = "76vw";
      menuPrimaryRef.current.style.top = "auto";
      // menuPrimaryRef.current.style.bottom = "0";
      menuPrimaryRef.current.style.zIndex = "5000";

      menuListUlRef.current.style.display = "flex";
      menuListUlRef.current.style.width = "100%";
      // menuListUlRef.current.style.flexDirection = "row";
      menuListUlRef.current.style.overflow = "hidden";
      menuListUlRef.current.style.overflowX = "auto";
      menuListUlRef.current.style.border = "none";

      newPuzzleItemRef.current.style.display = "inline";
      newPuzzleItemRef.current.style.marginRight = "55px";

      allPuzzlesItemRef.current.style.display = "inline";
      allPuzzlesItemRef.current.style.marginRight = "55px";

      newMovieItemRef.current.style.display = "inline";
      newMovieItemRef.current.style.marginRight = "55px";
    }
  } else if (
    !isSidebarOpened &&
    menuPrimaryRef.current &&
    newPuzzleItemRef.current &&
    allPuzzlesItemRef.current &&
    newMovieItemRef.current
  ) {
    menuPrimaryRef.current.style.display = "none";
  }

  return (
    <div ref={menuPrimaryRef} className="MenuPrimary-container">
      <ul ref={menuListUlRef} className="MenuPrimary-nav">
        <MenuPrimaryItem
          ref={newPuzzleItemRef}
          icon={<BorderOuterOutlined />}
          text="New puzzle"
          path="/admin/new-puzzle"
        />

        <MenuPrimaryItem
          ref={allPuzzlesItemRef}
          icon={<UnorderedListOutlined />}
          text="All puzzles"
          path="/admin/puzzles"
        />

        <MenuPrimaryItem
          ref={newMovieItemRef}
          icon={<BorderOuterOutlined />}
          text="New movie"
          path="/admin/new-movie"
        />
      </ul>
    </div>
  );
}

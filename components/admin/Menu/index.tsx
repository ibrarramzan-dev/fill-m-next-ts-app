"use client";

import React, { useEffect, useRef, useState } from "react";
import { BorderOuterOutlined } from "@ant-design/icons";
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

  const menuRef = useRef<HTMLDivElement>(null);
  const menuListUlRef = useRef<HTMLUListElement>(null);
  const newPuzzleItemRef = useRef<HTMLSpanElement>(null);

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
    if (menuRef.current && menuListUlRef.current && newPuzzleItemRef.current) {
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
    }
  } else if (!isSidebarOpened && menuRef.current && newPuzzleItemRef.current) {
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
      </ul>
    </div>
  );
}

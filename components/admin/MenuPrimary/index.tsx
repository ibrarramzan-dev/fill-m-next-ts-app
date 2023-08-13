"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import project from "./images/icon-dots.svg";
import list from "./images/icon-list.svg";
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

  // const { isOpen } = useContext(MenuBtnContext)

  const menuPrimaryRef = useRef<HTMLDivElement>(null);
  const menuListUlRef = useRef<HTMLUListElement>(null);

  const projectItemRef = useRef<HTMLSpanElement>(null);
  const versioningItemRef = useRef<HTMLSpanElement>(null);
  const usersItemRef = useRef<HTMLSpanElement>(null);
  const tagsItemRef = useRef<HTMLSpanElement>(null);

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

  // if (isOpen) {
  //   if (
  //     menuPrimaryRef.current &&
  //     menuListUlRef.current &&
  //     projectItemRef.current &&
  //     versioningItemRef.current &&
  //     usersItemRef.current &&
  //     tagsItemRef.current
  //   ) {
  //     menuPrimaryRef.current.style.display = "flex";
  //     menuPrimaryRef.current.style.justifyContent = "left";
  //     menuPrimaryRef.current.style.paddingTop = "0";
  //     menuPrimaryRef.current.style.width = "76vw";
  //     menuPrimaryRef.current.style.top = "auto";
  //     menuPrimaryRef.current.style.bottom = "0";
  //     menuPrimaryRef.current.style.height = "4rem";
  //     menuPrimaryRef.current.style.zIndex = "5000";

  //     menuListUlRef.current.style.display = "flex";
  //     menuListUlRef.current.style.width = "100%";
  //     menuListUlRef.current.style.flexDirection = "row";
  //     menuListUlRef.current.style.overflow = "hidden";
  //     menuListUlRef.current.style.overflowX = "auto";
  //     menuListUlRef.current.style.border = "none";

  //     projectItemRef.current.style.display = "inline";
  //     projectItemRef.current.style.marginRight = "55px";

  //     versioningItemRef.current.style.display = "inline";
  //     versioningItemRef.current.style.marginRight = "55px";

  //     usersItemRef.current.style.display = "inline";
  //     usersItemRef.current.style.marginRight = "55px";

  //     tagsItemRef.current.style.display = "inline";
  //     tagsItemRef.current.style.marginRight = "55px";
  //   }
  // } else if (
  //   !isOpen &&
  //   menuPrimaryRef.current &&
  //   projectItemRef.current &&
  //   versioningItemRef.current &&
  //   usersItemRef.current &&
  //   tagsItemRef.current
  // ) {
  //   menuPrimaryRef.current.style.display = "none";
  // }

  return (
    <div ref={menuPrimaryRef} className="MenuPrimary-container">
      <ul ref={menuListUlRef} className="MenuPrimary-nav">
        <MenuPrimaryItem
          ref={projectItemRef}
          icon={<BorderOuterOutlined />}
          text="New puzzle"
          path="/admin/new-puzzle"
        />

        <MenuPrimaryItem
          ref={versioningItemRef}
          icon={<UnorderedListOutlined />}
          text="All puzzles"
          path="/admin/puzzles"
        />

        <MenuPrimaryItem
          ref={usersItemRef}
          icon={<BorderOuterOutlined />}
          text="New movie"
          path="/admin/new-movie"
        />
      </ul>
    </div>
  );
}

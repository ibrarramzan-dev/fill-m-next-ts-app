import React, { forwardRef } from "react";
// import { Link, useLocation } from "react-router-dom"
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  icon: JSX.Element | null;
  text: string;
  path: string;
}

function MenuItem(
  { icon, text, path }: MenuItemProps,
  ref: React.LegacyRef<HTMLSpanElement> | undefined
) {
  // const { pathname } = useLocation();

  return (
    <li
      className={cn("Menu-nav-item", {
        "Menu-nav-item-projects": text === "Projects",
      })}
    >
      <Link href={path} className="Menu-nav-item-link">
        <div
          className={cn("Menu-nav-item-icon", {
            "Menu-nav-item-icon-tag": text === "Tags",
          })}
        >
          {icon}
        </div>

        <span ref={ref} className="Menu-nav-item-link-text">
          {text}
        </span>
      </Link>
    </li>
  );
}

export default forwardRef(MenuItem);

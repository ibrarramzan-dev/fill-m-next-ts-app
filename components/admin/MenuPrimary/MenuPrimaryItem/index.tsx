import React, { forwardRef } from "react";
// import { Link, useLocation } from "react-router-dom"
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuPrimaryItemProps {
  icon: JSX.Element | null;
  text: string;
  path: string;
}

function MenuPrimaryItem(
  { icon, text, path }: MenuPrimaryItemProps,
  ref: React.LegacyRef<HTMLSpanElement> | undefined
) {
  // const { pathname } = useLocation();

  return (
    <li
      className={cn("MenuPrimary-nav-item", {
        "MenuPrimary-nav-item-projects": text === "Projects",
      })}
    >
      <Link href={path} className="MenuPrimary-nav-item-link">
        <div
          className={cn("MenuPrimary-nav-item-icon", {
            "MenuPrimary-nav-item-icon-tag": text === "Tags",
          })}
        >
          {icon}
        </div>

        <span ref={ref} className="MenuPrimary-nav-item-link-text">
          {text}
        </span>
      </Link>
    </li>
  );
}

export default forwardRef(MenuPrimaryItem);

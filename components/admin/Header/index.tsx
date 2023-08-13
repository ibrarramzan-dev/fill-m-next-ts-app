"use client";

import React, { useContext } from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "@/app/AppState/Features/admin/adminSlice";
import hamburger from "./images/menu_black_24dp.svg";
import logo from "./images/body-shop-boost-logo.svg";
import tagOverlap from "./images/basf-logo.svg";
import Image from "next/image";
import cn from "classnames";
import { Indie_Flower, Caveat } from "next/font/google";
import Link from "next/link";

const Indie_Flower_Font = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const Caveat_Font = Caveat({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const isSidebarOpened = useSelector(
    (state: any) => state.admin.dashboard.isSidebarOpened
  );
  const dispatch = useDispatch();

  const menu = (
    <div className="AdminHeader-avatar-dropdown-menu">
      <Menu
        items={[
          {
            key: "1",
            label: (
              <div className="AdminHeader-avatar-dropdown-list-item">
                <Link target="_blank" rel="noopener noreferrer" href="#">
                  <i className="fa-solid fa-gear Header-avatar-dropdown-icons" />
                  Profile
                </Link>
              </div>
            ),
          },
          {
            key: "2",
            label: (
              <div className="AdminHeader-avatar-dropdown-list-item">
                <Link target="_blank" rel="noopener noreferrer" href="#">
                  <i className="fa-solid fa-key Header-avatar-dropdown-icons" />
                  Change Password
                </Link>
              </div>
            ),
          },
          {
            key: "3",
            label: (
              <div className="AdminHeader-avatar-dropdown-list-item">
                <Link target="_blank" rel="noopener noreferrer" href="#">
                  <i className="fa-solid fa-arrow-right-from-bracket Header-avatar-dropdown-icons" />
                  Logout
                </Link>
              </div>
            ),
          },
        ]}
      />
    </div>
  );

  return (
    <header className="AdminHeader-container">
      <div className="AdminHeader-container-fixed">
        <div
          className="AdminHeader-drawer-hamburger-btn"
          onClick={() => dispatch(toggleSidebar(!isSidebarOpened))}
          aria-hidden="true"
        >
          <Image src={hamburger} alt="Menu" />
        </div>

        <Link href="/admin">
          <div className="AdminHeader-brand-logo">
            <p
              className={cn(
                Indie_Flower_Font.className,
                "Header-logo",
                "AdminHeader-logo"
              )}
            >
              Fill-M{" "}
            </p>
            <p
              className={cn(
                Caveat_Font.className,
                "AdminHeader-logo-dashboard-text"
              )}
            >
              Dashboard
            </p>
          </div>
        </Link>
        <div className="AdminHeader-right-items">
          <div className="AdminHeader-right-items-avatar-dropdown">
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
              overlayStyle={{ width: "100%", padding: "11px" }}
            >
              <Avatar
                className="AdminHeader-right-items-avatar-dropdown-avatar"
                size="large"
                icon={
                  <Image
                    src="/admin/images/avatar.png"
                    alt="Avatar"
                    width={40}
                    height={40}
                  />
                }
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

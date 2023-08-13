import React, { useContext } from "react";
import { Avatar, Dropdown, Menu } from "antd";
import hamburger from "./images/menu_black_24dp.svg";
import logo from "./images/body-shop-boost-logo.svg";
import tagOverlap from "./images/basf-logo.svg";
import Image from "next/image";
import cn from "classnames";
import { Indie_Flower, Caveat } from "next/font/google";

const Indie_Flower_Font = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const Caveat_Font = Caveat({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const menu = (
    <div className="Header-avatar-dropdown-menu">
      <Menu
        items={[
          {
            key: "1",
            label: (
              <div className="Header-avatar-dropdown-list-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.antgroup.com"
                >
                  <i className="fa-solid fa-gear Header-avatar-dropdown-icons" />
                  Settings
                </a>
              </div>
            ),
          },
          {
            key: "2",
            label: (
              <div className="Header-avatar-dropdown-list-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.aliyun.com"
                >
                  <i className="fa-solid fa-key Header-avatar-dropdown-icons" />
                  Change Password
                </a>
              </div>
            ),
          },
          {
            key: "3",
            label: (
              <div className="Header-avatar-dropdown-list-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.aliyun.com"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket Header-avatar-dropdown-icons" />
                  Logout
                </a>
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
          // onClick={toggleMenu}
          aria-hidden="true"
        >
          <Image src={hamburger} alt="Menu" />
        </div>

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

        <div className="AdminHeader-right-items">
          <div className="AdminHeader-avatar-dropdown">
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
              overlayStyle={{ width: "100%", padding: "11px" }}
            >
              <Avatar
                className="AdminHeader-avatar-dropdown-avatar"
                size="large"
                icon={<i className="fa-solid fa-user" />}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

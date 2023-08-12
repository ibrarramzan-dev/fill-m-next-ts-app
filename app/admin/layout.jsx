"use client";
import "@/public/admin/styles/root-style.css";
import React, { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Indie_Flower } from "next/font/google";
import cn from "classnames";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UnorderedListOutlined,
  UserOutlined,
  BorderOuterOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const Indie_Flower_Font = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const Admin = ({ children }) => {
  return (
    <>
      <header className="cd-main-header js-cd-main-header">
        <div className="cd-logo-wrapper">
          <a href="/" className="cd-logo">
            Fill-M
          </a>
        </div>
        <div className="cd-search js-cd-search"></div>
        <button
          className="reset cd-nav-trigger js-cd-nav-trigger"
          aria-label="Toggle menu"
        >
          <span />
        </button>
        <ul className="cd-nav__list js-cd-nav__list">
          <li className="cd-nav__item">
            <a href="#0">Support</a>
          </li>
          <li className="cd-nav__item cd-nav__item--has-children cd-nav__item--account js-cd-item--has-children">
            <a href="#0">
              <Image
                src="admin/images/cd-avatar.svg"
                alt="avatar"
                width="22"
                height="22"
              />
              <span>Ibrar</span>
            </a>
            <ul className="cd-nav__sub-list">
              <li className="cd-nav__sub-item">
                <a href="#0">Profile</a>
              </li>
              <li className="cd-nav__sub-item">
                <a href="#0">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      {/* .cd-main-header */}
      <main className="cd-main-content">
        <nav className="cd-side-nav js-cd-side-nav">
          <ul className="cd-side__list js-cd-side__list">
            <li className="cd-side__item cd-side__item--has-children cd-side__item--overview js-cd-item--has-children">
              <a href="#0">New puzzle</a>
            </li>
            <li className="cd-side__item cd-side__item--has-children cd-side__item--overview js-cd-item--has-children">
              <a href="#0">All puzzles</a>
            </li>
            <li className="cd-side__item cd-side__item--has-children cd-side__item--overview js-cd-item--has-children">
              <a href="#0">Add new movie</a>
            </li>
          </ul>
          <ul className="cd-side__list js-cd-side__list">
            <li className="cd-side__btn">
              <button className="reset" href="#0">
                LOGOUT
              </button>
            </li>
          </ul>
        </nav>
        <div className="cd-content-wrapper">
          <div className="text-component">
            <h1>Welcome to Dashboard, Fill-M</h1>
            <ul>
              <li>New puzzle</li>
              <li>All puzzles (view, edit, delete)</li>
              <li>Add new movie to the database</li>
            </ul>
          </div>
        </div>
        {/* .content-wrapper */}
      </main>
      <Script src="admin/scripts/util.js" />
      <Script src="admin/scripts/menu-aim.js" />
      <Script src="admin/scripts/main.js" />
    </>
  );
};

export default Admin;

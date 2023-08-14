"use client";
import "@/public/admin/styles/style.css";
import React, { useState } from "react";
import { Indie_Flower } from "next/font/google";
import Header from "@/components/admin/Header";
import Menu from "@/components/admin/Menu";

const Indie_Flower_Font = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const AdminLayout = ({ children }) => {
  return (
    <div className="AdminLayout">
      <Header />

      <div className="AdminLayout-body-container">
        <div className="AdminLayout-sidemenu">
          <Menu />
        </div>

        <div className="AdminLayout-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;

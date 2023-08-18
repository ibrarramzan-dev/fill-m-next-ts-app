"use client";

import "@/public/admin/styles/style.css";
import React from "react";
import Header from "@/components/admin/Header";
import Menu from "@/components/admin/Menu";

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

"use client";

import "@/public/admin/styles/style.css";
import React from "react";
import { useSelector } from "react-redux";
import Header from "@/components/admin/Header";
import Menu from "@/components/admin/Menu";
import Login from "@/components/admin/Login/Login";

const AdminLayout = ({ children }) => {
  const auth = useSelector((state) => state.admin.auth);

  return (
    <div className="AdminLayout">
      {auth ? <Header /> : null}

      <div className="AdminLayout-body-container">
        {auth ? (
          <div className="AdminLayout-sidemenu">
            <Menu />
          </div>
        ) : null}

        {auth ? (
          <div className="AdminLayout-content">{children}</div>
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default AdminLayout;

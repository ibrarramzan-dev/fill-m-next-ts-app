"use client";
import "@/public/admin/styles/style.css";
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
import Header from "@/components/admin/Header";

const Indie_Flower_Font = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default AdminLayout;

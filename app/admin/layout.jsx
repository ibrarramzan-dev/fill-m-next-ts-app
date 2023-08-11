"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Indie_Flower } from "next/font/google";
import cn from "classnames";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  WalletOutlined,
  UserOutlined,
  BorderOuterOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;

const Indie_Flower_Font = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const Admin = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <Link href="/admin/new-puzzle">
                  <BorderOuterOutlined />
                </Link>
              ),
              label: "New Puzzle",
            },
            {
              key: "2",
              icon: (
                <Link href="/admin/all-puzzles">
                  <WalletOutlined />
                </Link>
              ),
              label: "All Puzzles",
            },
            {
              key: "3",
              icon: (
                <Link href="/admin/logout">
                  <UserOutlined />
                </Link>
              ),
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout style={{ height: "fit-content" }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "left",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <p className={cn(Indie_Flower_Font.className, "Admin-logo")}>
            Fill-M
          </p>
        </Header>
        <Content
          style={{
            margin: "-2.88rem 16px",
            padding: 24,
            height: "100%",
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;

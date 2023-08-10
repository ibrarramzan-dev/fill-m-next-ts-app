import "antd/dist/reset.css";
import "@/styles/app.css";
import type { Metadata } from "next";
import Link from "next/link";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fill-M",
  description:
    "Test your knowledge about the movies! Fill-M is a daily trivia game with a new grid every day!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Ubuntu&display=swap&family=Edu+SA+Beginner:wght@600&family=Kanit:wght@300"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

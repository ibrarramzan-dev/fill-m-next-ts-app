import Image from "next/image";
import Link from "next/link";
import { Indie_Flower } from "next/font/google";
import { useState, useEffect } from "react";
import { BsTwitter } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import { Modal } from "antd";
import cn from "classnames";
import Cookies from "js-cookie";
import Rules from "./Rules";

const Indie_Flower_Font = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!Cookies.get("fill-m-visited")) {
      Cookies.set("fill-m-visited", true, { expires: 400 });
      setIsModalOpen(true);
    }
  }, []);

  return (
    <header>
      <Link href="/">
        <div className={cn(Indie_Flower_Font.className, "Header-logo")}>
          <Image
            src="/app/images/logo.png"
            alt="logo"
            width="175"
            height="43"
          />
        </div>
      </Link>
      <div className="Header-right-items">
        <Link
          href="https://twitter.com/FillMGame"
          target="_blank"
          className="Header-right-items-icon"
        >
          <BsTwitter style={{ color: "#1ebbf5" }} />
        </Link>
        <BsQuestionLg
          onClick={() => setIsModalOpen(true)}
          className="Header-right-items-icon"
          style={{ color: "#535353" }}
        />
      </div>

      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <Rules />
      </Modal>
    </header>
  );
}

export default Header;

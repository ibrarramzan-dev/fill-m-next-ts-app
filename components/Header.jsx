import Link from "next/link";
import { Indie_Flower } from "next/font/google";
import { useState, useEffect } from "react";
import { BsTwitter } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
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
          Fill-M
        </div>
      </Link>
      <div className="Header-right-items">
        <BsTwitter className="Header-right-items-icon" />
        <ImStatsBars className="Header-right-items-icon" />
        <BsQuestionLg
          onClick={() => setIsModalOpen(true)}
          className="Header-right-items-icon"
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

import { Indie_Flower } from "next/font/google";
import cn from "classnames";
import { BsTwitter } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { BsQuestionLg } from "react-icons/bs";

const Indie_Flower_Font = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  return (
    <header>
      <div className={cn(Indie_Flower_Font.className, "Header-logo")}>
        Fill-M
      </div>
      <div className="Header-right-items">
        <BsTwitter className="Header-right-items-icon" />
        <ImStatsBars className="Header-right-items-icon" />
        <BsQuestionLg className="Header-right-items-icon" />
      </div>
    </header>
  );
}

export default Header;

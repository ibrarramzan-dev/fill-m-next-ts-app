import { Indie_Flower, Caveat, Sanchez } from "next/font/google";
import { GiHelp } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "antd";
import cn from "classnames";

const Indie_Flower_Font = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
});

const Caveat_Font = Caveat({
  subsets: ["latin"],
  weight: "400",
});

const Sanchez_Font = Sanchez({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  return (
    <header className="AdminHeader">
      <Link href="/admin">
        <div className="AdminHeader-logo-wrapper">
          <p
            className={cn(
              Indie_Flower_Font.className,
              "Header-logo",
              "AdminHeader-logo"
            )}
          >
            Fill-M{" "}
          </p>
          <p
            className={cn(
              Caveat_Font.className,
              "AdminHeader-logo-dashboard-text"
            )}
          >
            Dashboard
          </p>
        </div>
      </Link>
      <div
        className={cn(
          "AdminHeader-right-items-wrapper",
          Sanchez_Font.className
        )}
      >
        <div className="AdminHeader-right-items-support-icon-wrapper">
          <Tooltip title="Help">
            <GiHelp className="AdminHeader-right-items-support-icon" />
          </Tooltip>
        </div>
        <div className="AdminHeader-right-items-separator" />
        <div className="AdminHeader-right-items-avatar-drowdown">
          <Image
            src="/admin/images/avatar.png"
            alt="Avatar"
            width={46}
            height={46}
          />{" "}
          Robert
        </div>
      </div>
    </header>
  );
}

export default Header;

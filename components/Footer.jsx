import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="Footer-disclaimer-wrapper">
        <p>
          Note: Fill-M does not own any of the film industry information
          depicted within this site. All rights go to the rightful owners (click
          images for attribution information).
        </p>
        <p>
          Please submit any game feedback or ideas to{" "}
          <Link href="mailto:fill.m.grid@gmail.com">fill.m.grid@gmail.com</Link>{" "}
          or via twitter{" "}
          <Link href="https://twitter.com/FillMGame" target="_blank">
            @FillMGame
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

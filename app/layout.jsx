import "antd/dist/reset.css";
import "reactjs-popup/dist/index.css";
import "@/public/app/styles/style.css";
import { Providers } from "./AppState/provider";

export const metadata = {
  title: "Fill-M",
  description:
    "Test your knowledge about the movies! Fill-M is a daily trivia game with a new grid every day!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2274883504971937"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

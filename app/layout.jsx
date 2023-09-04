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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

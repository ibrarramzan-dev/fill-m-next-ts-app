import "antd/dist/reset.css";
import "@/public/app/styles/style.css";

export const metadata = {
  title: "Fill-M",
  description:
    "Test your knowledge about the movies! Fill-M is a daily trivia game with a new grid every day!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

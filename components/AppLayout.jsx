import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default AppLayout;

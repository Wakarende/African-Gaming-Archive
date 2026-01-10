import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  isLandingPage?: boolean;
}

const Layout = ({ children, isLandingPage = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isLandingPage={isLandingPage} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

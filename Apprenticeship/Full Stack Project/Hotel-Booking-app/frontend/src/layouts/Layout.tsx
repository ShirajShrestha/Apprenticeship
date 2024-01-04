import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../styles/layout.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className=" layout-container">
      <Header />
      <Hero />
      <div className="flex-1 main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

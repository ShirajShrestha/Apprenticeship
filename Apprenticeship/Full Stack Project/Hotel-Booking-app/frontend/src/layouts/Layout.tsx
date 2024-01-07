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
      <div className="main-content flex-1 ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

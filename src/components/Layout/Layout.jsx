import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../Header/Header";

const Layout = ({ roster, limit }) => {
  return (
    <>
      <Header limit={limit} roster={roster} />
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };

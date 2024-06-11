import { Outlet } from "react-router-dom";
import { Header, Footer } from "components";
import css from "./BasicLayout.module.css";

const BasicLayout = () => {
  return (
    <main className={css.main}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
};

export default BasicLayout;
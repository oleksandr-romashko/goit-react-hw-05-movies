import { Outlet } from "react-router-dom";
import { Header, Footer } from "components";
import css from "./BasicLayout.module.css";

const BasicLayout = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
};

export default BasicLayout;
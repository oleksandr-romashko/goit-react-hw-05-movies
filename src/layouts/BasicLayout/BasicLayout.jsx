import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Loader } from "components";
import css from "./BasicLayout.module.css";

const BasicLayout = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
};

export default BasicLayout;
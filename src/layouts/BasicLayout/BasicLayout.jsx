import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Loader } from "components";
import css from "./BasicLayout.module.css";

/**
 * Basic layout wrapper component.
 * @returns {JSX.Element} Rendered layout component.
 */
const BasicLayout = () => {
  return (
    <>
      <Header />
      <main className={css["main-content"]}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
};

export default BasicLayout;
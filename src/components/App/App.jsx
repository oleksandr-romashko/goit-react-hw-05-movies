import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BasicLayout } from "layouts";
import { loadCriticalImages } from "helpers/imagesPreload";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));

/**
 * Movie Search application component.
 * @returns {React.Component}
 */
const App = () => {
  /**
   * Loads critically necessary images to cache them for further use.
   */
  useEffect(()=> {
    loadCriticalImages();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
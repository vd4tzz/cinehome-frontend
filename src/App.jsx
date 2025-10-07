import DefaultLayout from "./layout/DefaultLayout.jsx";
import FreeLayout from "./layout/MovieDetailLayout.jsx";
import MovieDetailPage from "./page/MovieDetailPage.jsx";
import MoviePage from "./page/MoviePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<DefaultLayout />} >
                  <Route index element={<MoviePage />} />
                  <Route path="/movie" element={<MoviePage />} />
              </Route>

              <Route path="/movie/:movieId" element={<FreeLayout />}>
                      <Route index element={<MovieDetailPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

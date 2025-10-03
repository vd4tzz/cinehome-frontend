import DefaultLayout from "./layout/DefaultLayout.jsx";
import MovieDetailLayout from "./layout/MovieDetailLayout.jsx";
import MovieDetailPage from "./page/MovieDetailPage.jsx";
import MoviePage from "./page/MoviePage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./page/AboutPage.jsx";

import "./App.css";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<DefaultLayout />} >
                  <Route index element={<MoviePage />} />
                  <Route path="/movie" element={<MoviePage />} />
              </Route>

              <Route path="/movie/:movieId" element={<MovieDetailLayout />}>
                      <Route index element={<MovieDetailPage />} />
              </Route>

              <Route path="/" element={<DefaultLayout />} >
                    <Route path="/about" element={<About />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

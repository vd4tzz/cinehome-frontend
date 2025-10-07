import DefaultLayout from "./layout/DefaultLayout.jsx";
import MovieDetailLayout from "./layout/MovieDetailLayout.jsx";
import MovieDetailPage from "./page/MovieDetailPage.jsx";
import MoviePage from "./page/MoviePage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from "./page/AboutPage.jsx";
import FoodPage from "./page/FoodPage.jsx";

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
                    <Route path="/about" element={<AboutPage />} />
              </Route>

              <Route path="/" element={<DefaultLayout />} >
                    <Route path="/food" element={<FoodPage/>} />
              </Route>

          </Routes>
      </BrowserRouter>
  );
}

export default App;

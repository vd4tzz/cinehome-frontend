import Footer from "./component/Footer.jsx";
import NavBar from "./component/NavBar.jsx";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<DefaultLayout />} >
                  {/*<Route index element={<h1></h1>} />*/}
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

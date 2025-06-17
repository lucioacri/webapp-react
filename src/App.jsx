import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/defaultLayout";
import HomePage from "./components/HomePage";
import FilmsList from "./components/FilmsList";
import ShowFilm from "./components/ShowFilm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/films" element={<FilmsList />} />
          <Route path="/films/:id" element={<ShowFilm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

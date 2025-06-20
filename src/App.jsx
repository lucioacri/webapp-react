import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/defaultLayout";
import HomePage from "./components/HomePage";
import FilmsList from "./components/FilmsList";
import ShowFilm from "./components/ShowFilm";
import NewMovieProvider from "./contexts/NewMovieContext";

function App() {
  return (
    <NewMovieProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<FilmsList />} />
            <Route path="/movies/:id" element={<ShowFilm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NewMovieProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/defaultLayout";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/films" element={<Films />}>
            <Route index element={<FilmsList />} />
            <Route path=":id" element={<ShowFilm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

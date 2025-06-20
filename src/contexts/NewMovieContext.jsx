import { createContext, useContext, useState } from "react";

const NewMovieContext = createContext();

export default function NewMovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const setAllMovies = (movieList) => {
    setMovies(movieList);
  };

  return (
    <NewMovieContext.Provider value={{ movies, addMovie, setAllMovies }}>
      {children}
    </NewMovieContext.Provider>
  );
}

function useMovies() {
  const context = useContext(NewMovieContext);
  return context;
}

export { NewMovieContext, useMovies };

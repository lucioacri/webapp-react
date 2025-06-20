import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import MovieLoader from "./MovieLoader";
import { NewMovieContext } from "../contexts/NewMovieContext";

export default function FilmsList() {
  const { movies, setAllMovies } = useContext(NewMovieContext);

  const fetchMovies = () => {
    axios.get("http://localhost:3000/movies").then((res) => {
      const { movies: fetchedMovies } = res.data;
      setAllMovies(fetchedMovies);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <MovieLoader />
      <div className="container">
        <div className="row g-3">
          {movies.map((movie) => (
            <div key={movie.id} className="col-3">
              <Card
                title={movie.title}
                movies
                link={`/movies/${movie.id}`}
                director={movie.director}
                genre={movie.genre}
                release_year={movie.release_year}
                abstract={movie.abstract}
                image={movie.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

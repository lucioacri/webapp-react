import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import MovieLoader from "./MovieLoader";

export default function FilmsList() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("http://localhost:3000/movies").then((res) => {
      const { movies } = res.data;
      setMovies(movies);
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

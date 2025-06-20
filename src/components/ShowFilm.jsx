import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import { NewMovieContext } from "../contexts/NewMovieContext";
import MovieLoader from "./MovieLoader";

export default function ShowFilm() {
  const { addMovie } = useContext(NewMovieContext);
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const handleNewReview = (newReview) => {
    setMovie({ ...movie, reviews: [...movie.reviews, newReview] });
  };

  const fetchMovie = () => {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      const { data } = res.data;
      setMovie(data);
      console.log(res);
    });
  };
  useEffect(fetchMovie, [id]);

  if (!movie) return <h2>Loading...</h2>;

  const votes = movie.reviews.map((review) => review.vote);
  let sum = 0;
  votes.forEach((vote) => {
    sum += vote;
  });

  const averageVote = votes ? (sum / votes.length).toFixed(0) : "No reviews";

  return (
    <>
      <MovieLoader />
      <div className="container">
        <h1>titolo: {movie.title}</h1>
        <p>descrizione: {movie.abstract}</p>
        <p>voto medio: {averageVote}</p>
        <div className="row">
          <h2>Recensioni</h2>
          {movie.reviews.map((review) => (
            <div className="col-3" key={review.id}>
              <p>Nome: {review.name}</p>
              <p>Recensione: {review.text}</p>
              <p>Voto: {review.vote}</p> <br />
            </div>
          ))}
        </div>
        <ReviewForm id={id} onNewReview={handleNewReview} />
        <img src={movie.image} alt={movie.title}></img>
      </div>
    </>
  );
}

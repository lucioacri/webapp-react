import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowFilm() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

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
      <div className="container">
        <h1>titolo: {movie.title}</h1>
        <p>descrizione: {movie.abstract}</p>
        <p>voto medio: {averageVote}</p>
        <img src={movie.image} alt={movie.title}></img>
      </div>
    </>
  );
}

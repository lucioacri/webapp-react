import { Link } from "react-router";

export default function Card({
  link,
  title,
  director,
  genre,
  release_year,
  abstract,
  image,
}) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{abstract}</p>
        <p className="card-text">{director}</p>
        <p className="card-text">{genre}</p>
        <p className="card-text">{release_year}</p>
        <Link to={link} className="btn btn-primary">
          Go to details
        </Link>
      </div>
    </div>
  );
}

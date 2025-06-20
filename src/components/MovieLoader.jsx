import axios from "axios";
import { useContext, useState } from "react";
import { NewMovieContext } from "../contexts/NewMovieContext";

export default function MovieLoader() {
  const { addMovie } = useContext(NewMovieContext);
  const originalLoadData = {
    title: "",
    director: "",
    genre: "",
    release_year: 0,
    abstract: "",
    image: "",
  };

  const [showForm, setShowForm] = useState(false);
  const [loadFormData, setLoadFormData] = useState(originalLoadData);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/movies", loadFormData).then((res) => {
      const newMovie = { ...loadFormData, id: res.data.newFilmId };
      addMovie(newMovie);
      setLoadFormData(originalLoadData);
      setShowForm(false);
    });
  };

  const handleChange = (e) => {
    setLoadFormData({ ...loadFormData, [e.target.name]: e.target.value });
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="container">
        <button className="btn btn-primary" onClick={handleShowForm}>
          Aggiungi film
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="row">
          <label htmlFor="title">Titolo</label>
          <input
            type="text"
            name="title"
            value={loadFormData.title}
            onChange={handleChange}
            className="form-control my-2"
          />
          <label htmlFor="director">Regista</label>
          <input
            type="text"
            name="director"
            value={loadFormData.director}
            onChange={handleChange}
            className="form-control my-2"
          />
          <label htmlFor="genre">Genere</label>
          <input
            type="text"
            name="genre"
            value={loadFormData.genre}
            onChange={handleChange}
            className="form-control my-2"
          />
          <label htmlFor="release_year">Anno</label>
          <input
            type="text"
            name="release_year"
            value={loadFormData.release_year}
            onChange={handleChange}
            className="form-control my-2"
          />
          <label htmlFor="abstract">Descrizione</label>
          <input
            type="text"
            name="abstract"
            value={loadFormData.abstract}
            onChange={handleChange}
            className="form-control my-2"
          />
          <label htmlFor="image">Copertina</label>
          <input
            type="text"
            name="image"
            value={loadFormData.image}
            onChange={handleChange}
            className="form-control my-2"
          />
          <button type="submit" className="btn btn-success">
            Salva Film
          </button>
        </form>
      )}
    </>
  );
}

import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ id, onNewReview }) {
  const movieApiUrl = "http://localhost:3000/movies/" + id + "/reviews";

  const formBaseData = { name: "", vote: 1, text: "" };
  const [formData, setFormData] = useState(formBaseData);

  const fetchReviews = () => {
    axios.post(movieApiUrl, formData).then((res) => {
      console.log(res);
      onNewReview({ ...formData, id: res.data.reviewId });
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchReviews();
    setFormData(formBaseData);
  };

  return (
    <section className="my-5">
      <div className="container">
        <h2>Inserisci una recensione</h2>
        <form className="row g-2" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="vote">Voto</label>
          <input
            type="number"
            name="vote"
            min={1}
            max={5}
            value={formData.vote}
            onChange={handleInputChange}
          />
          <label htmlFor="review">Recensione</label>
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-primary">
            Invia recensione
          </button>
        </form>
      </div>
    </section>
  );
}

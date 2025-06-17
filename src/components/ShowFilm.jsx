import { useParams } from "react-router";

export default function ShowFilm() {
  const { id } = useParams();

  return (
    <>
      <div className="container">
        <h1>titolo {id}</h1>
        <p>descrizione</p>
        <p>voto</p>
        <p>immagine</p>
      </div>
    </>
  );
}

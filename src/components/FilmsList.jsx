import Card from "./Card";

const films = [
  {
    id: 1,
    link: "abc",
    title: "a",
    director: "b",
    genre: "c",
    release_year: "d",
    abstract: "e",
    image: "f",
  },
  {
    id: 2,
    link: "abc",
    title: "a",
    director: "b",
    genre: "c",
    release_year: "d",
    abstract: "e",
    image: "f",
  },
  {
    id: 3,
    link: "abc",
    title: "a",
    director: "b",
    genre: "c",
    release_year: "d",
    abstract: "e",
    image: "f",
  },
  {
    id: 4,
    link: "abc",
    title: "a",
    director: "b",
    genre: "c",
    release_year: "d",
    abstract: "e",
    image: "f",
  },
];

export default function FilmsList() {
  return (
    <>
      <div className="container">
        <div className="row g-3">
          {films.map((film) => (
            <div key={film.id} className="col-3">
              <Card
                title={film.title}
                link={film.link}
                director={film.director}
                genre={film.genre}
                release_year={film.release_year}
                abstract={film.abstract}
                image={film.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

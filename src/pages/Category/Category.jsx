import { useParams } from "react-router-dom";
import CategoryRow from "../../components/CategoryRow/CategoryRow";
import filmsData from "../../data/filmsData"; // import centralized films data

export default function Category() {
  const { name } = useParams();

  // Filter films based on category name
  const filteredFilms = filmsData.filter(
    (film) => film.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>
        🎬 {name.toUpperCase()} Films
      </h1>

      <CategoryRow title={`${name} Films`} films={filteredFilms} />
    </div>
  );
}

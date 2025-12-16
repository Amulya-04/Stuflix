import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryRow({ title, films }) {
  const navigate = useNavigate();

  return (
    <section style={{ marginBottom: "40px" }}>
      <h2 style={{ marginBottom: "15px" }}>{title}</h2>

      <div style={styles.row}>
        {films.map((film) => (
          <div key={film.id} style={styles.card}>
            <div style={styles.thumbnail}>Thumbnail</div>

            <h3 style={{ margin: "8px 0" }}>{film.title}</h3>
            <p>{film.category}</p>
            <span>👁 {film.views}</span>

            <button
              style={styles.button}
              onClick={() => navigate("/film-details", { state: film })}
            >
              Watch
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  row: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    paddingBottom: "10px",
  },
  card: {
    minWidth: "220px",
    background: "#020617",
    padding: "15px",
    borderRadius: "10px",
  },
  thumbnail: {
    height: "120px",
    background: "#1e293b",
    borderRadius: "6px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    marginTop: "10px",
    padding: "8px",
    background: "red",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },
};

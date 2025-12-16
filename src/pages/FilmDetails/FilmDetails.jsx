import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function FilmDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const film = location.state; // film object from Dashboard

  if (!film) {
    return (
      <div style={styles.container}>
        <h2>No film selected</h2>
        <button
          onClick={() => navigate("/dashboard")}
          style={styles.back}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleWatch = () => {
    navigate(`/player/${film.id || 1}`, {
      state: film, // pass full film data to Player
    });
  };

  return (
    <div style={styles.container}>
      <button
        onClick={() => navigate("/dashboard")}
        style={styles.back}
      >
        ← Back to Dashboard
      </button>

      <div style={styles.details}>
        <div style={styles.thumbnail}>Thumbnail</div>

        <div style={styles.info}>
          <h1>{film.title}</h1>
          <p><strong>Category:</strong> {film.category}</p>
          <p><strong>Views:</strong> {film.views}</p>

          {/* WATCH BUTTON */}
          <button style={styles.watch} onClick={handleWatch}>
            ▶ Watch Film
          </button>
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    padding: "30px 40px",
  },
  back: {
    marginBottom: "20px",
    padding: "8px 16px",
    background: "#ef4444",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },
  details: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
  },
  thumbnail: {
    width: "300px",
    height: "200px",
    background: "#1e293b",
    borderRadius: "8px",
  },
  info: {
    flex: 1,
    minWidth: "300px",
  },
  watch: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "red",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

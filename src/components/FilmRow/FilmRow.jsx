import FilmCard from "../FilmCard/FilmCard";

export default function FilmRow({ title, films }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={styles.title}>{title}</h2>

      <div style={styles.row}>
        {films.map((film, index) => (
          <FilmCard film={film} key={index} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  title: {
    color: "white",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    overflowX: "auto",
  },
};

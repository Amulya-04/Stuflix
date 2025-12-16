export default function FilmCard({ film }) {
  return (
    <div style={styles.card}>
      <img src={film.thumbnail} alt={film.title} style={styles.img} />
      <p style={styles.title}>{film.title}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "150px",
    marginRight: "15px",
    cursor: "pointer",
  },
  img: {
    width: "100%",
    borderRadius: "8px",
  },
  title: {
    color: "white",
    marginTop: "5px",
    fontSize: "14px",
  },
};

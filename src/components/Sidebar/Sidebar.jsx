import { useNavigate } from "react-router-dom";

export default function Sidebar({ categories, isAdmin }) {
  const navigate = useNavigate();

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>🎬 SF Platform</h2>

      <p style={styles.item} onClick={() => navigate("/dashboard")}>
        📊 Dashboard
      </p>

      <p style={styles.item} onClick={() =>
  navigate("/search-results", { state: { fromSidebar: true } })
}>
        🔍 Search
      </p>

      <h4 style={styles.heading}>Categories</h4>
      {categories.map((cat) => (
        <p
          key={cat}
          style={styles.item}
          onClick={() => navigate(`/category/${cat.toLowerCase()}`)}
        >
          🎬 {cat}
        </p>
      ))}

      {isAdmin && (
  <>
    <h4 style={styles.heading}>Admin</h4>
    <p
      style={styles.item}
      onClick={() => navigate("/upload-film")}
    >
      ⬆ Upload Film
    </p>
  </>
)}
    </div>
  );
}


const styles = {
  sidebar: {
    width: "240px",
    background: "#020617",
    color: "white",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    padding: "20px",
  },
  logo: {
    marginBottom: "30px",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  heading: {
    marginTop: "20px",
    color: "#94a3b8",
  },
  item: {
    cursor: "pointer",
    padding: "8px",
    borderRadius: "6px",
  },
};

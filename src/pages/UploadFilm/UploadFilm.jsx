import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function UploadFilm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, genre, thumbnail, video });
    alert("Film data collected! Backend connection coming next.");
  };

  const categories = ["Drama", "College", "Documentary"];
  const role = localStorage.getItem("role");
  const isAdmin = role === "admin";

  return (
    <div style={{ display: "flex", background: "#0f172a", color: "white" }}>
      
      {/* Sidebar */}
      <Sidebar categories={categories} isAdmin={isAdmin} />

      {/* Main Content */}
      <div style={{ marginLeft: "240px", width: "100%" }}>
        <Navbar isAdmin={isAdmin} />

        <div style={styles.container}>
          <h1 style={styles.title}>Upload New Film</h1>

          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Film Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
              required
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
              required
            />

            <input
              type="text"
              placeholder="Genre (Drama, Sci-Fi, Comedy)"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              style={styles.input}
              required
            />

            <label style={styles.label}>Upload Thumbnail Image:</label>
            <input
              type="file"
              onChange={(e) => setThumbnail(e.target.files[0])}
              style={styles.file}
              accept="image/*"
              required
            />

            <label style={styles.label}>Upload Video File:</label>
            <input
              type="file"
              onChange={(e) => setVideo(e.target.files[0])}
              style={styles.file}
              accept="video/*"
              required
            />

            <button type="submit" style={styles.btn}>
              Upload Film
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    background: "black",
    minHeight: "100vh",
    padding: "40px",
    color: "white",
  },
  title: {
    marginBottom: "25px",
    textAlign: "center",
  },
  form: {
    width: "400px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #444",
    background: "#222",
    color: "white",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #444",
    background: "#222",
    color: "white",
    minHeight: "100px",
  },
  label: {
    marginTop: "10px",
  },
  file: {
    padding: "10px",
    background: "#111",
    borderRadius: "8px",
    border: "1px solid #333",
    color: "white",
  },
  btn: {
    padding: "12px",
    background: "red",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "white",
  },
};

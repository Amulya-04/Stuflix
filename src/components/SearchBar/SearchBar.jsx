import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <form onSubmit={submitHandler} style={styles.form}>
      <input
        type="text"
        placeholder="Search films..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  input: {
    width: "60%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #444",
    background: "#222",
    color: "white",
    fontSize: "16px",
  },
};

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // Example: get role and user info from localStorage (dummy)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "user", // or "admin"
    uploadedFilms: [
      { id: 1, title: "My Short Film" },
      { id: 2, title: "Campus Life Documentary" },
    ],
  });

  // Example: simulate fetching from backend
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedRole = localStorage.getItem("role");

    if (savedName && savedEmail && savedRole) {
      setUser({
        ...user,
        name: savedName,
        email: savedEmail,
        role: savedRole,
      });
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1>Profile</h1>

      <div style={styles.card}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>

      {user.role === "admin" && (
        <div style={styles.adminSection}>
          <h2>Uploaded Films</h2>
          {user.uploadedFilms.length === 0 ? (
            <p>No films uploaded yet.</p>
          ) : (
            <ul>
              {user.uploadedFilms.map((film) => (
                <li key={film.id}>{film.title}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <button style={styles.logout} onClick={() => navigate("/home")}>
        Logout
      </button>
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
  card: {
    background: "#020617",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "30px",
  },
  adminSection: {
    background: "#020617",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "30px",
  },
  logout: {
    padding: "10px 20px",
    background: "red",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

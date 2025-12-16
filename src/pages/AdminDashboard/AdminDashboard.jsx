import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import filmsData from "../../data/filmsData";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name") || "Admin";
  const [search, setSearch] = useState("");

  const sidebarWidth = 280; // width of left frame
  const categories = ["Drama", "College", "Documentary", "Comedy", "Sci-Fi"];

  // Filter films based on search
  const filteredFilms = filmsData.filter((film) =>
    film.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Main Container: Flex layout for left and right frames
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f172a", color: "white" }}>

      {/* ⬅️ Left Frame: Sidebar (Fixed Width) */}
      <div
        style={{
          width: sidebarWidth, // 200px
          borderRight: "1px solid #1e293b",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Sidebar categories={categories} isAdmin={true} search={search} />
      </div>

      {/* ➡️ Right Frame: Main Content (Takes up remaining space) */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        
        {/* Navbar on top of the right frame */}
        <Navbar search={search} setSearch={setSearch} isAdmin={true} userName={userName} />

        {/* Scrollable Content Area */}
        <div style={{ flex: 1, padding: "20px 30px", overflowY: "auto" }}>
          <h2>Welcome, {userName} (Admin)</h2>

          {/* Admin Controls Section */}
          <section
            style={{
              margin: "20px 0",
              padding: "20px",
              background: "#020617",
              borderRadius: "10px",
            }}
          >
            <h3>Admin Controls</h3>
            <button
              style={{
                padding: "10px 20px",
                background: "red",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={() => navigate("/upload-film")}
            >
              ⬆ Upload New Film
            </button>
          </section>

          {/* All Films Section */}
          <section>
            <h3>All Films</h3>
            {filteredFilms.length === 0 ? (
              <p>No films found</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "20px",
                  marginTop: "15px",
                }}
              >
                {filteredFilms.map((film) => (
                  <div
                    key={film.id}
                    style={{
                      background: "#020617",
                      padding: "15px",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        height: "120px",
                        background: "#1e293b",
                        borderRadius: "6px",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#94a3b8"
                      }}
                    >
                      Thumbnail Placeholder
                    </div>
                    <h4>{film.title}</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.9em' }}>{film.category}</p>
                    <span style={{ fontSize: '0.9em' }}>👁 {film.views}</span>

                    {/* Admin actions */}
                    <div style={{ marginTop: "10px" }}>
                      <button
                        style={{
                          padding: "6px 12px",
                          marginRight: "5px",
                          borderRadius: "6px",
                          background: "#444",
                          border: "none",
                          color: "white",
                          cursor: "pointer",
                        }}
                        onClick={() => alert("Edit feature coming soon")}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          padding: "6px 12px",
                          borderRadius: "6px",
                          background: "darkred",
                          border: "none",
                          color: "white",
                          cursor: "pointer",
                        }}
                        onClick={() => alert("Delete feature coming soon")}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Footer at the bottom of the right frame */}
        <Footer />
      </div>
    </div>
  );
}
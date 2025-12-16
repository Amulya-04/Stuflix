import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CategoryRow from "../../components/CategoryRow/CategoryRow";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Dashboard() {
  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("name") || "User";
  const isAdmin = role === "admin";

  const [search, setSearch] = useState("");

  const filmsData = [
    { id: 1, title: "The Last Bell", category: "Drama", views: 1200 },
    { id: 2, title: "Campus Dreams", category: "College", views: 900 },
    { id: 3, title: "Silent Voice", category: "Drama", views: 1500 },
    { id: 4, title: "Beyond Frames", category: "Documentary", views: 700 },
  ];

  const categories = ["Drama", "College", "Documentary"];

  const recommendedFilms = [...filmsData]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <div style={{ display: "flex", background: "#0f172a", color: "white" }}>

      {/* LEFT SIDEBAR */}
      <Sidebar categories={categories} isAdmin={isAdmin} />

      {/* RIGHT CONTENT */}
      <div style={{ marginLeft: "240px", width: "100%" }}>
        <Navbar
          isAdmin={isAdmin}
          search={search}
          setSearch={setSearch}
          userName={userName}
        />

        <div style={{ paddingTop: "80px", padding: "20px 40px" }}>
          <CategoryRow title="⭐ Recommended" films={recommendedFilms} />
          <CategoryRow title="🎥 All Films" films={filmsData} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

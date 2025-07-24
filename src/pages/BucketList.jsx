import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PlaceCard from "../components/PlaceCard";

export default function BucketList() {
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    try {
      const res = await axios.get("https://travel-bucket-backend-1.onrender.com/api/places");
      setPlaces(res.data);
    } catch (err) {
      console.error("Error fetching places:", err);
    }
  };

  const handleToggleVisited = async (id, visited) => {
    try {
      await axios.put(`https://travel-bucket-backend-1.onrender.com/api/places/${id}`, {
        visited: !visited,
      });
      fetchPlaces();
    } catch (err) {
      console.error("Error updating visited:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this place?")) return;
    try {
      await axios.delete(`https://travel-bucket-backend-1.onrender.com/api/places/${id}`);
      fetchPlaces();
    } catch (err) {
      console.error("Error deleting place:", err);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <>
      {/* 🔵 NAVBAR */}
      <nav
        style={{
          backgroundColor: "#1e3a8a",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Travel Bucket
        </h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/add" style={{ color: "#fff", textDecoration: "none" }}>
            Add Place
          </Link>
          <Link to="/list" style={{ color: "#fff", textDecoration: "none" }}>
            View Places
          </Link>
        </div>
      </nav>

      {/* ✅ MAIN CONTENT */}
      <div style={{ padding: "30px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            color: "#0077cc",
            marginBottom: "30px",
          }}
        >
          Your Travel Bucket List
        </h2>

        {places.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888" }}>
            No places added yet.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {places.map((place) => (
              <PlaceCard
                key={place._id}
                place={place}
                onToggleVisited={() =>
                  handleToggleVisited(place._id, place.visited)
                }
                onDelete={() => handleDelete(place._id)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// src/components/PlaceCard.jsx

export default function PlaceCard({ place, onToggleVisited, onDelete }) {
  return (
    <div
      style={{
        border: place.visited ? "2px solid #4ade80" : "2px solid #60a5fa", // green or blue outline
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "20px",
        backgroundColor: "#fdfdfd",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
        minHeight: "380px", // fixed height to avoid shifting
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Image Section */}
      {place.image && (
        <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
          <img
            src={place.image}
            alt={place.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div style={{ padding: "15px", flexGrow: 1 }}>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "6px", color: "#1f2937" }}>
          {place.name}
        </h3>
        <p style={{ color: "#4b5563", marginBottom: "8px" }}>{place.notes}</p>
        <p style={{ fontWeight: "600", color: place.visited ? "#15803d" : "#b91c1c" }}>
          {place.visited ? "Visited ✅" : "Not Visited ❌"}
        </p>
      </div>

      {/* Buttons */}
      <div style={{ padding: "0 15px 15px" }}>
        <button
          onClick={onToggleVisited}
          style={{
            padding: "8px 14px",
            marginRight: "10px",
            backgroundColor: "#ecfdf5", // light green bg
            color: "#065f46",
            border: "1px solid #34d399",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          {place.visited ? "Mark Unvisited" : "Mark Visited"}
        </button>

        <button
          onClick={onDelete}
          style={{
            padding: "8px 14px",
            backgroundColor: "#fef2f2", // light red bg
            color: "#991b1b",
            border: "1px solid #f87171",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

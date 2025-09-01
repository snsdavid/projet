import React from "react";

const MapWithMarkers = () => {
  return (
    <div style={{ position: "relative", width: "800px", margin: "auto" }}>
      {/* Image de fond */}
      <img src='/carte.png' alt="World Map" style={{ width: "100%" }} />

      {/* Exemple de points */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "46%",
          backgroundColor: "orange",
          borderRadius: "50%",
          width: "15px",
          height: "15px",
        }}
        title="Afrique de l'Ouest"
      ></div>
    </div>
  );
};

export default MapWithMarkers;

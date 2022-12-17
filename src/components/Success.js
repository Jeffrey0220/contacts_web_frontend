import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 333,
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontWeight: "bold", color: "green" }}>Success ! 🎉</h1>
      <p
        style={{
          fontWeight: "bold",
          color: "green",
          fontSize: 20,
          fontFamily: "Helvetica",
        }}
      >
        Back to contacts list in 3 seconds...
      </p>
    </div>
  );
}

export default Success;

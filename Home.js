import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Banner */}
      <img
        src={process.env.PUBLIC_URL + "/img.jpg"}
        alt="Banner"
        className="home-banner"
      />

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; 2026 Saba's Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
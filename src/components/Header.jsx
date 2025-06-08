import React from "react";

export default function Header() {
  return (
    <header style={{ padding: "20px", backgroundColor: "#a5d6a7" }}>
      <h1>Bank Sampah</h1>
      <nav style={{ marginTop: "10px" }}>
        <a
          href="#hero"
          style={{ marginRight: "15px", textDecoration: "none", color: "#333" }}
        >
          Beranda
        </a>
        <a
          href="#services"
          style={{ marginRight: "15px", textDecoration: "none", color: "#333" }}
        >
          Layanan
        </a>
        <a href="#footer" style={{ textDecoration: "none", color: "#333" }}>
          Kontak
        </a>
      </nav>
    </header>
  );
}

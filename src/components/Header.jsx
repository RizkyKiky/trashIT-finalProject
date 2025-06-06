import React from "react";

export default function Header() {
  return (
    <div>
      <header style={{ padding: "20px", backgroundColor: "#a5d6a7" }}>
        <h1>Bank Sampah</h1>
        <nav>
          <a href="#hero">Beranda</a> |<a href="#services">Layanan</a> |
          <a href="#footer">Kontak</a>
        </nav>
      </header>
    </div>
  );
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <main>
        <section id="hero" style={{ padding: "40px 0", textAlign: "center" }}>
          <h1>Selamat Datang di Bank Sampah</h1>
          <p>
            Kami membantu mengelola sampah menjadi lebih bermanfaat untuk
            lingkungan.
          </p>
        </section>
        <section
          id="services"
          style={{ padding: "40px 0", background: "#f1f8e9" }}
        >
          <h2>Layanan Kami</h2>
          <ul>
            <li>Penjemputan Sampah</li>
            <li>Edukasi Daur Ulang</li>
            <li>Tabungan Sampah</li>
          </ul>
        </section>
      </main>
      <footer
        id="footer"
        style={{ padding: "20px", background: "#a5d6a7", textAlign: "center" }}
      >
        <p>Kontak: banksampah@email.com | 0812-3456-7890</p>
      </footer>
    </div>
  );
}

export default App;

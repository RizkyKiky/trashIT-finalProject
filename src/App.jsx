import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;

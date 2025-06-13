import React from "react";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-200 via-lime-100 to-green-300 min-h-[60vh]">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="card w-full max-w-2xl bg-white shadow-2xl border-2 border-green-400">
          <div className="card-body items-center text-center p-10">
            <h2 className="card-title text-green-700 mb-4 text-3xl">
              Layanan Bank Sampah
            </h2>
            <p className="mb-6 text-gray-700 text-lg">
              Setor sampahmu dan dapatkan manfaatnya! Klik tombol di bawah untuk
              mulai input data sampah yang ingin kamu setor.
            </p>
            <Link to="/signin" className="btn btn-success w-full text-lg py-3">
              Input Bank Sampah
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

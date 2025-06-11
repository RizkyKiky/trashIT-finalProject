import React from "react";

export default function Hero() {
  return (
    <div
      id="home"
      className="hero min-h-screen bg-base-200"
      style={{ backgroundColor: "#0A3D45" }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Welcome To Bank Sampah Website !
          </h1>
          <p className="mb-5 text-gray-200">
            Encouraging the community to manage waste wisely in order to create
            valuable benefits.
          </p>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
}

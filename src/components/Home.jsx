import React from "react";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-primary text-white py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome To Bank Sampah Website !
      </h1>
      <p className="text-xl text-center max-w-2xl mb-8">
        Encouraging the community to manage waste wisely in order to create
        valuable benefits.
      </p>
      <button className="bg-primary-button hover:bg-primary-button-hover text-primary-text font-bold px-8 py-3 rounded-md transition-colors">
        Get Started
      </button>
    </section>
  );
}

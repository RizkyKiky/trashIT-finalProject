import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-green-200 via-lime-100 to-green-300"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-manrope">
                About Us
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
                <span className="font-semibold text-primary">
                  Bank Sampah Trash-IT
                </span>{" "}
                is an environmental initiative aimed at encouraging communities
                to manage waste more wisely, intelligently, and sustainably. We
                believe that waste is not the end of something, but the
                beginning of a valuable opportunity. By adopting a savings
                system based on waste, we invite people from all walks of life
                to actively deposit their sorted inorganic waste. This waste is
                then converted into economic value and recorded as savings that
                are beneficial for the depositor.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Vision
              </h3>
              <p className="text-gray-700 text-base leading-relaxed text-justify">
                To be a driving force for a cleaner environment and empowered
                communities through productive waste management.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Mission
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-justify">
                <li>
                  To raise public awareness about the importance of properly
                  sorting and managing waste.
                </li>
                <li>
                  To provide an accessible waste deposit and management system
                  based on savings.
                </li>
                <li>
                  To empower communities through training, education, and
                  cross-sector collaboration.
                </li>
                <li>
                  To transform waste into something valuable through recycling
                  activities and sustainable innovation.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="rounded-3xl overflow-hidden shadow-lg w-full max-w-md bg-white flex items-center">
              <img
                className="object-cover w-full h-full"
                src="https://media.istockphoto.com/id/1046422662/id/vektor/anak-anak-membersihkan-kebun-dan-membuang-sampah-ke-tempat-sampah-dalam-tiga-warna.jpg?s=612x612&w=0&k=20&c=XzqqYanDhRlVpFz6PpC2LmHt-UuSeaMWZvlx_v8nIBk="
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

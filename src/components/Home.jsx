import React from "react";

export default function Home() {
  return (
    <>
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

      {/* Ini About Us */}
      <section id="about" className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-8 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center mb-1">
                  About Us
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed text-justify mb-2">
                  Bank Sampah Trash-IT is an environmental initiative aimed at
                  encouraging communities to manage waste more wisely,
                  intelligently, and sustainably. We believe that waste is not
                  the end of something, but the beginning of a valuable
                  opportunity. By adopting a savings system based on waste, we
                  invite people from all walks of life to actively deposit their
                  sorted inorganic waste. This waste is then converted into
                  economic value and recorded as savings that are beneficial for
                  the depositor.
                </p>
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-normal lg:text-start text-center mb-1">
                  Vision
                </h3>
                <p className="text-gray-500 text-base font-normal leading-relaxed text-justify mb-2">
                  To be a driving force for a cleaner environment and empowered
                  communities through productive waste management.
                </p>
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-normal lg:text-start text-center mb-1">
                  Mission
                </h3>
                <ul className="list-disc list-inside space-y-1 text-base text-gray-500 mb-2">
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
            <img
              className="lg:mx-0 mx-auto rounded-3xl object-cover"
              src="https://media.istockphoto.com/id/1046422662/id/vektor/anak-anak-membersihkan-kebun-dan-membuang-sampah-ke-tempat-sampah-dalam-tiga-warna.jpg?s=612x612&w=0&k=20&c=XzqqYanDhRlVpFz6PpC2LmHt-UuSeaMWZvlx_v8nIBk="
              alt="about Us image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

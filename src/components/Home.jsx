import React from 'react';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-primary text-white py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome To Bank Sampah Website !</h1>
        <p className="text-xl text-center max-w-2xl mb-8">Encouraging the community to manage waste wisely in order to create valuable benefits.</p>
        <button className="bg-primary-button hover:bg-primary-button-hover text-primary-text font-bold px-8 py-3 rounded-md transition-colors">Get Started</button>
      </section>

      {/* Ini About Us */}
      <section id="about" className="py-24 relative bg-green-200">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-8 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center mb-1">About Us</h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed text-justify mb-2">
                  Bank Sampah Trash-IT is an environmental initiative aimed at encouraging communities to manage waste more wisely, intelligently, and sustainably. We believe that waste is not the end of something, but the beginning of a
                  valuable opportunity. By adopting a savings system based on waste, we invite people from all walks of life to actively deposit their sorted inorganic waste. This waste is then converted into economic value and recorded as
                  savings that are beneficial for the depositor.
                </p>
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-normal lg:text-start text-center mb-1">Vision</h3>
                <p className="text-gray-500 text-base font-normal leading-relaxed text-justify mb-2">To be a driving force for a cleaner environment and empowered communities through productive waste management.</p>
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-normal lg:text-start text-center mb-1">Mission</h3>
                <ul className="list-disc list-inside space-y-1 text-base text-gray-500 mb-2">
                  <li>To raise public awareness about the importance of properly sorting and managing waste.</li>
                  <li>To provide an accessible waste deposit and management system based on savings.</li>
                  <li>To empower communities through training, education, and cross-sector collaboration.</li>
                  <li>To transform waste into something valuable through recycling activities and sustainable innovation.</li>
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

      {/* Contact Us Section */}
      <section id="contact" className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

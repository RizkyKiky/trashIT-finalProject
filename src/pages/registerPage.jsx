import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import trashitLogo from '../images/trashit.png';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!formData.terms) {
      alert('You must accept the Terms and Conditions!');
      return;
    }
    try {
      // Ganti URL dengan endpoint API yang sesuai
      const response = await axios.post('YOUR_REGISTER_API_URL', {
        email: formData.email,
        password: formData.password,
      });
      console.log('Registration success:', response.data);
      // Tambahkan logika untuk handling response, seperti redirect ke login
    } catch (error) {
      console.error('Registration failed:', error);
      // Tambahkan logika untuk handling error
    }
  };

  return (
    <section className="bg-gradient-to-br from-green-200 via-blue-100 to-blue-300 min-h-screen overflow-auto flex items-center justify-center mt-16">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full max-w-md mt-25">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-10 h-10 mr-2" src={trashitLogo} alt="logo" />
          <span className="text-green-700">Trash-It</span>
        </a>
        <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-6 space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">Create an account</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block mb-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block mb-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="john"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@gmail.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="08*********"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="w-full text-white bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Create account
              </button>
              <p className="text-sm font-light text-gray-500 text-center">
                Already have an account?{' '}
                <Link to="/signin" className="font-medium text-blue-600 hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

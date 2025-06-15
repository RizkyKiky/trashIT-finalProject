import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BarChart from '../components/BarChart';
import ChartBar from '../components/ChartBar';
import ChartPie from '../components/ChartPie';

export default function AdminDashboard() {
  return (
    <div className="flex bg-white">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-1 p-8">
        <div className="flex gap-x-4">
          <div className="card bg-lime-200 shadow text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-black">Total Pengguna</h2>
              <p className="text-black">Card 1 content</p>
            </div>
          </div>
          <div className="card bg-cyan-200 shadow text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-black">Total Transaksi</h2>
              <p className="text-black">Card 2 content</p>
            </div>
          </div>
          <div className="card bg-rose-200 shadow text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title text-black">Total Approvals</h2>
              <p className="text-black">Card 3 content</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          <div className="w-1/2">
            <ChartBar />
          </div>
          <div className="w-1/2">
            <ChartPie />
          </div>
        </div>
      </div>
    </div>
  );
}

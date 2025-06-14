import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BarChart from '../components/BarChart';

export default function AdminDashboard() {
  return (
    <div className="flex">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-1 p-8">
        <div className="flex gap-x-4">
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">Total Pengguna</h2>
              <p>Card 1 content</p>
            </div>
          </div>
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">Total Transaksi</h2>
              <p>Card 2 content</p>
            </div>
          </div>
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">Total Approvals</h2>
              <p>Card 3 content</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

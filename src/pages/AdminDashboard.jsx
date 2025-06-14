import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

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
              <h2 className="card-title">Card 1</h2>
              <p>Card 1 content</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">Card 2</h2>
              <p>Card 2 content</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card bg-primary text-primary-content w-96">
            <div className="card-body">
              <h2 className="card-title">Card 3</h2>
              <p>Card 3 content</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

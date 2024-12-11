import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Cpu, Info, ShoppingCart } from 'lucide-react';

export function Navbar() {
  return (
    <header className="bg-purple-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Cpu className="w-8 h-8" />
            <span className="text-2xl font-bold">TechCraft</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-purple-200">
              <Info className="w-5 h-5" />
              <span>About</span>
            </Link>
            <Link to="/customize" className="flex items-center space-x-1 hover:text-purple-200">
              <Smartphone className="w-5 h-5" />
              <span>Customize</span>
            </Link>
            <Link to="/orders" className="flex items-center space-x-1 hover:text-purple-200">
              <ShoppingCart className="w-5 h-5" />
              <span>Orders</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
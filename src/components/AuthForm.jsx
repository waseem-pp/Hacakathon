import React from "react";
import {Link} from 'react-router-dom';

const Navbar = ()=> (
    <nav className="bg-green-600 text-white py-3 shadow-md">
    <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2x1 font-bold tracking-wide">ShareCare</Link>
        <div>
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/map" className="hover:underline">Live Map</Link>
            <Link to="/post" className="hover:underline">Post Food</Link>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/login" className="bg-white text-green-600 px-3 py-1 rounded hover:bg-gray-100">Login</Link>
        </div>
    </div>
    </nav>
);

export default Navbar;
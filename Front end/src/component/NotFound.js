import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
            <p className="text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
            
            <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
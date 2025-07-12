import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-500">Something went wrong!</h1>
            <p className="text-lg mt-4">An unexpected error occurred.</p>

            {/* Display error message */}
            <pre className="bg-gray-200 p-4 rounded-md mt-4">
                {error?.message || "Unknown error"}
            </pre>

            <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Go Back to Home
            </Link>
        </div>
    );
};

export default ErrorBoundary;
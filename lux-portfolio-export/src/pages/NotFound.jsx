import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
            <h1 className="text-9xl font-bold text-blue-500/20">404</h1>
            <h2 className="text-3xl font-bold -mt-10 mb-4">Page Not Found</h2>
            <p className="text-gray-400 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
            </p>
            <div className="flex gap-4">
                <Button to="/" variant="primary">
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

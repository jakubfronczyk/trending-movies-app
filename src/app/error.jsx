"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="text-center mx-auto mt-10 w-1/2 p-5">
            <div className="bg-[#413F42] dark:bg-[#2B3467] py-6 text-red-500 rounded-lg flex flex-col gap-6">
                <h1 className="text-xl font-bold">Something went wrong</h1>
                <button
                    onClick={() => reset()}
                    className="bg-blue-600 w-1/2 mx-auto text-white p-2 rounded-lg hover:bg-blue-800"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default Error;

import React from 'react';
import Img from "/Image.jpg";
import FreeContent from './FreeContent';

function Image() {
    return (
        <div className="max-w-screen-2xl pb-10 container mx-auto md:px-20 px-4 flex flex-col md:flex-row bg-gray-900 text-gray-100">
            {/* Left Section */}
            <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
                <div className="space-y-12">
                    <h1 className="text-4xl font-bold text-white leading-snug">
                        Welcome to Learn Something Everyday.
                        <br />
                        <span className="text-blue-400">
                            Real stories. Real experiences. Real growth —
                        </span>{" "}
                        because life is the best teacher.
                    </h1>
                    <p className="text-lg text-gray-300">
                        Dive into real-life stories of people who faced challenges,
                        overcame obstacles, and achieved growth. Learn, reflect, and get
                        inspired to write your own journey.
                    </p>
                </div>

                {/* Email Input */}
                <div className="mt-6">
                    <label className="flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-200">
                        <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input
                            type="email"
                            placeholder="mail@gmail.com"
                            required
                            className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500"
                        />
                    </label>
                    <div className="validator-hint hidden text-sm text-red-400 mt-2">
                        Enter a valid email address
                    </div>
                </div>

                {/* Submit Button */}
                <button className="btn mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-200">
                    Submit
                </button>
            </div>

            {/* Right Section - Image */}
            <div className="order-1 w-full md:w-1/2 relative mt-16 md:mt-24 md:ml-5">
                <img
                    src={Img}
                    alt="Inspiring group"
                    className="w-full h-auto md:h-[500px] object-cover rounded-lg opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-lg"></div>
            </div>
        </div>
    );
}

export default Image;

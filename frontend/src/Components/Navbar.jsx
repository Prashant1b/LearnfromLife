import './nav.css'
import { useEffect } from 'react';
import { Link } from 'react-router';
import Login from './Login';
import MainHome from '../Home/MainHome';
import Signup from './Signup';
import Profile from './Profile';

export default function Navbar({ user, setUser }) {

    const navitems = (
        <>
            <Link to="/MainHome" className="mx-3 text-gray-300 hover:text-blue-400 duration-200">Home</Link>
            <Link to="/Course" className="mx-3 text-gray-300 hover:text-blue-400 duration-200">Course</Link>
            <Link to="/Quiz" className="mx-3 text-gray-300 hover:text-blue-400 duration-200">Quiz</Link>
            <Link to="/book" className="mx-3 text-gray-300 hover:text-blue-400 duration-200">Book Session</Link>
            <Link to="/Contact" className="mx-3 text-gray-300 hover:text-blue-400 duration-200">Suggestion Box</Link>
            <Link to="/About" className="mx-3 text-gray-300 hover:text-blue-400 duration-200">About</Link>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-gray-900 shadow-lg border-b border-gray-700 text-gray-100 ">
            <div className="max-w-screen-2xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
                <div className="navbar-start flex items-center">
                    {/* Dropdown for mobile */}
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-gray-800 text-gray-200 rounded-box mt-3 w-52 p-2 shadow-lg border border-gray-700">
                            {navitems}
                        </ul>
                    </div>
                    <Link className="text-2xl font-bold cursor-pointer text-white" to="/">LearnFromLife</Link>
                </div>

                <div className="navbar-end space-x-5 flex items-center">
                    {/* Nav links for large screens */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navitems}
                        </ul>
                    </div>

                    {/* Search bar */}
                    <div className='hidden md:block'>
                        <label className="px-3 py-1 flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-md">
                            <svg className="h-[1em] text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                type="search"
                                className='grow outline-none bg-transparent text-gray-200 placeholder-gray-500'
                                required
                                placeholder="Search"
                            />
                        </label>
                    </div>

                    {/* User authentication link */}
                    {user ? (
                        <Link to="/profile" className="mx-3 text-gray-300 hover:text-blue-400 duration-200">
                            Profile
                        </Link>
                    ) : (
                        <Link to="/login" className="mx-3 text-gray-300 hover:text-blue-400 duration-200">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

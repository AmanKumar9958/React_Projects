import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };
    return (
        <div>
            <nav className="w-11/12 m-auto mt-4 rounded-3xl flex justify-between items-center p-4 bg-gray-300 text-gray-800 fixed top-0 left-0 right-0 z-50 pl-5 pr-5 dark:bg-gray-800 dark:text-gray-200">
                <Link to='/' className='text-xl font-bold'>Aman Kumar</Link>
                <ul className="flex space-x-4">
                    <NavLink to='/' className={({isActive}) => isActive ? 'p-2 bg-slate-100 rounded-full cursor-pointer text-lg links font-bold text-slate-900' : 'cursor-pointer text-lg font-bold hover:text-gray-500 dark:text-gray-300 transition-all'} >Home</NavLink>
                    <NavLink to='/projects' className={({isActive}) => isActive ? 'p-2 bg-slate-100 rounded-full cursor-pointer text-lg links font-bold text-slate-900' : 'cursor-pointer text-lg font-bold hover:text-gray-500 dark:text-gray-300 transition-all'} >Projects</NavLink>
                    <NavLink to='/contact' className={({isActive}) => isActive ? 'p-2 bg-slate-100 rounded-full cursor-pointer text-lg links font-bold text-slate-900' : 'cursor-pointer text-lg font-bold hover:text-gray-500 dark:text-gray-300 transition-all'} >Contact</NavLink>
                </ul>
                <button onClick={toggleMode} className="ml-4 p-2 font-semibold rounded bg-gray-700 text-white hover:bg-gray-600 transition-all">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;
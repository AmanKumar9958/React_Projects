import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-200 text-gray-800 py-4 dark:bg-gray-800 dark:text-gray-200">
            <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm mb-4 md:mb-0">&copy; 2025 Aman Kumar. All rights reserved.</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://github.com/AmanKumar9958/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mt-2 hover:scale-105 transition-all">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/aman-kumar-39a7b7292/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mt-2 hover:scale-105 transition-all">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
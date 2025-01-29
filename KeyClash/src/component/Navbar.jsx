import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="w-full h-16 text-white flex items-center justify-center bg-gray-800 shadow-lg">
        <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faKeyboard} className="text-4xl text-blue-400" />
            <h2 className="text-4xl font-bold text-blue-400">KeyClash</h2>
        </div>
        </div>
    );
};

export default Navbar;
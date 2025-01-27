import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="w-4/5 h-16  text-white flex items-center justify-center m-auto rounded-2xl bg-gray-800">
        <div className="flex items-center gap-5 justify-center">
            <FontAwesomeIcon icon={faKeyboard} className="text-4xl" />
            <h2 className="text-4xl">Rapid Type</h2>
        </div>
        </div>
    );
};

export default Navbar;

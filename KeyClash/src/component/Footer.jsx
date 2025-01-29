import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="w-full h-16 bg-gray-950 text-white flex items-center justify-center gap-6 mt-8">
        <div className="flex items-center gap-2 hover:scale-105 transition-all">
            <FontAwesomeIcon icon={faEnvelope} className="text-lg text-blue-400" />
            <a
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg hover:text-blue-400 transition-colors"
            >
            Contact
            </a>
        </div>
        <div className="flex items-center gap-2 hover:scale-105 transition-all">
            <FontAwesomeIcon icon={faCodeBranch} className="text-lg text-blue-400" />
            <a
            href="https://github.com/AmanKumar9958"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg hover:text-blue-400 transition-colors"
            >
            GitHub
            </a>
        </div>
        </div>
    );
};

export default Footer;
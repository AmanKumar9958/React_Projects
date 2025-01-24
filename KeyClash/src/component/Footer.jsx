import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="w-full h-10 bg-slate-950 text-white flex items-center justify-center gap-4 m-auto mt-4 absolute bottom-0">
        <div className="flex items-center gap-2 hover:scale-105 transition-all">
            <FontAwesomeIcon icon={faEnvelope} />
            <a
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold cursor-pointer"
            >
            Contact
            </a>
        </div>
        <div className="flex items-center gap-2 hover:scale-105 transition-all">
            <FontAwesomeIcon icon={faCodeBranch} />
            <a
            href="https://github.com/AmanKumar9958"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
            >
            GitHub
            </a>
        </div>
        </div>
    );
};

export default Footer;

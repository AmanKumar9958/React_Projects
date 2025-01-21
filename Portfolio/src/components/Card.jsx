import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, description, imageUrl, link, reference }) => {
    return (
        <motion.div
            drag
            dragConstraints={reference}
            dragTransition={{ power: 1.8, timeConstant: 100, modifyTarget: (target) => target * 3 }}
            transition={{ duration: 0.1 }}
            whileDrag={{scale: 0.5}}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 transform transition-transform duration-300 bg-white"
        >
            <div className="overflow-hidden rounded-t-lg">
                <img
                    className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                    src={imageUrl}
                    alt={title}
                />
            </div>
            <div className="px-6 py-4 bg-white dark:bg-gray-800">
                <div className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">{title}</div>
                <p className="text-gray-700 text-base dark:text-gray-100">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mt-2 hover:scale-105 transition-all"
                >
                    Link
                </a>
            </div>
        </motion.div>
    );
};

export default Card;

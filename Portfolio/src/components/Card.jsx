import React from 'react';

const Card = ({ title, description, imageUrl, link }) => {
    return (
        <div
            className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 transform transition-transform duration-300 bg-white"
        >
            <div className="overflow-hidden rounded-t-lg">
                <img
                    className="w-full h-48 object-contain transform transition-transform duration-300 hover:scale-105"
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
        </div>
    );
};

export default Card;
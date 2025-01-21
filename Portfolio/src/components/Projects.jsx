import React, { useRef } from 'react';
import Card from './Card';

const Projects = () => {

    const projects = [
        {
            title: 'Weather App',
            description: 'A real-time weather application providing city-specific weather updates.',
            imageUrl: 'src/assets/WeatherApp.png',
            link: 'https://amankumar9958.github.io/weatherApp',
        },
        {
            title: 'QR Generator',
            description: 'Generates QR codes for text or links quickly and easily.',
            imageUrl: 'src/assets/QRGenerator.png',
            link: 'https://amankumar9958.github.io/QRGenerator/'
        },
        {
            title: 'Pixel Paint',
            description: 'A Chrome extension for selecting colors and enhancing creativity.',
            imageUrl: 'src/assets/PixelPaint.png',
            link: 'https://amankumar9958.github.io/PixelPaint'
        },
        {
            title: 'Text to Speech Converter',
            description: 'Converts any input text into clear, audible speech using modern browser-based text-to-speech APIs',
            imageUrl: 'src/assets/TextToSpeech.png',
            link: 'https://amankumar9958.github.io/textToSpeech/'
        },
        {
            title: 'Link Saver',
            description: 'A simple and efficient tool to save and organize important links, ensuring easy access and better productivity.',
            imageUrl: 'src/assets/LinkSaver.png',
            link: 'https://amankumar9958.github.io/linkSaver/'
        },
        {
            title: 'Palindrome Checker',
            description: 'A lightweight executable application to check whether a given word or phrase is a palindrome, ensuring accuracy and speed.',
            imageUrl: 'src/assets/PalindromeChecker.png',
            link: 'https://github.com/AmanKumar9958/PalindromeChecker/releases/tag/v0.1'
        }
    ]
    const ref = useRef(null);

    return (
        <div ref={ref} className='w-full min-h-screen p-8 pt-24 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'>
            <h2 className='text-center font-bold text-4xl mb-8  w-fit m-auto mt-3 p-2 rounded-lg'>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((eachProject, index) => (
                    <Card reference={ref} key={index} title={eachProject.title} description={eachProject.description} imageUrl={eachProject.imageUrl} link={eachProject.link}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;
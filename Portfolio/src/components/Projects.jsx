import React from 'react';
import Card from './Card';

const Projects = () => {

    const projects = [
        {
            title: 'Weather App',
            description: 'A real-time weather application providing city-specific weather updates.',
            imageUrl: '/assets/WeatherApp.png', // Update path
            link: 'https://amankumar9958.github.io/weatherApp',
        },
        {
            title: 'QR Generator',
            description: 'Generates QR codes for text or links quickly and easily.',
            imageUrl: '/assets/QRGenerator.png', // Update path
            link: 'https://amankumar9958.github.io/QRGenerator/'
        },
        {
            title: 'Pixel Paint',
            description: 'A Chrome extension for selecting colors and enhancing creativity.',
            imageUrl: '/assets/PixelPaint.png', // Update path
            link: 'https://amankumar9958.github.io/PixelPaint'
        },
        {
            title: 'Text to Speech Converter',
            description: 'Converts any input text into clear, audible speech using modern browser-based text-to-speech APIs',
            imageUrl: '/assets/TextToSpeech.png', // Update path
            link: 'https://amankumar9958.github.io/textToSpeech/'
        },
        {
            title: 'Link Saver',
            description: 'A simple and efficient tool to save and organize important links, ensuring easy access and better productivity.',
            imageUrl: '/assets/LinkSaver.png', // Update path
            link: 'https://amankumar9958.github.io/linkSaver/'
        },
        {
            title: 'Palindrome Checker',
            description: 'A lightweight executable application to check whether a given word or phrase is a palindrome, ensuring accuracy and speed.',
            imageUrl: '/assets/PalindromeChecker.png', // Update path
            link: 'https://github.com/AmanKumar9958/PalindromeChecker/releases/tag/v0.1'
        }
    ]

    return (
        <div className='w-full min-h-screen p-8 pt-24 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'>
            <h2 className='text-center font-bold text-4xl mb-8 w-fit m-auto mt-3 p-2 rounded-lg'>Projects</h2>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 mx-auto'>
                    {projects.map((eachProject, index) => (
                        <Card key={index} title={eachProject.title} description={eachProject.description} imageUrl={eachProject.imageUrl} link={eachProject.link}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
import React from 'react';
import {motion} from 'framer-motion';

const Home = () => {
    return (
        <div className='w-full min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'>
            {/* Hero Section */}
            <section className=' bg-gray-200 dark:bg-gray-900 flex flex-col items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center'>Hi, I'm Aman Kumar <span className='wave'>👋</span></h1>
                <p className='text-lg sm:text-xl mb-8 text-center'>Full Stack Developer | Tech Enthusiast</p>
                <a href='#about' className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-semibold text-lg'>Learn More</a>
            </section>

            {/* About Me Section */}
            <section id='about' className='py-10 px-8 dark:bg-gray-800'>
                <h2 className='text-4xl font-bold text-center mb-8'>About Me</h2>
                <div className='max-w-4xl mx-auto'>
                    <p className='text-lg mb-4'>
                        Hi, I'm Aman Kumar, a passionate Full Stack Developer with experience in building web applications using modern technologies. I love to explore new technologies and continuously improve my skills.
                    </p>
                    <p className='text-lg mb-4'>
                        I have a strong background in both front-end and back-end development, and I enjoy working on projects that challenge me to learn and grow. My goal is to create efficient, scalable, and user-friendly applications.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section id='skills' className='py-16 px-8 bg-gray-200 dark:bg-gray-900'>
                <h2 className='text-4xl font-bold text-center mb-8'>Skills</h2>
                <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <motion.div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg'>
                        <h3 className='text-2xl font-bold mb-4'>Front-End</h3>
                        <ul className='list-disc list-inside'>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML & CSS</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </motion.div>
                    <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg'>
                        <h3 className='text-2xl font-bold mb-4'>Back-End</h3>
                        <ul className='list-disc list-inside'>
                            <h4>Soon ⏳</h4>
                        </ul>
                    </div>
                    <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg'>
                        <h3 className='text-2xl font-bold mb-4'>Tools & Technologies</h3>
                        <ul className='list-disc list-inside'>
                            <h4>Soon ⏳</h4>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
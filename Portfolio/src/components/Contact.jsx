import React from 'react';

const Contact = () => {
    return (
        <div className='w-full min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 p-8 pt-24'>
            <h2 className='text-center font-bold text-4xl mb-8 mt-4'>Contact Me</h2>
            <div className='max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg'>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2' htmlFor='name'>
                            Name
                        </label>
                        <input
                            className='w-full px-3 py-2 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none'
                            type='text'
                            id='name'
                            placeholder='Your Name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='w-full px-3 py-2 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none'
                            type='email'
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2' htmlFor='message'>
                            Message
                        </label>
                        <textarea
                            className='w-full px-3 py-2 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none'
                            id='message'
                            rows='5'
                            placeholder='Your Message'
                        ></textarea>
                    </div>
                    <div className='text-center'>
                        <button
                            className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all'
                            type='submit'
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
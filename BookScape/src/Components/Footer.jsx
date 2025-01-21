import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-[10rem]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    <p className="text-xl font-semibold mb-4 md:mb-0">&copy; 2023 BookScape. All rights reserved.</p>
                    <nav className="flex gap-8">
                        <a href="/AboutUs" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a>
                        <a href="mailto:liyanagesupun10@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                        <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                    </nav>
                </div>
                <div className="mt-8 text-center text-sm text-gray-400">
                    <p>Designed by Supun Liyanage</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

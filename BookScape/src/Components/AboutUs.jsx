import React from 'react';
import { BookOpen, Users, Heart, ExternalLink } from 'lucide-react';
import profilePic from '../assets/Supun Liyanage profile pic.png';
import "./Navigation.css";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 px-24">
            <div className="container mx-auto px-4 py-12">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About <span className="text-blue-600 dark:text-blue-400 handwriting">BookScape</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Your digital sanctuary for literary exploration and community
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Story</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                BookScape emerged from a simple vision: creating a space where book lovers can freely explore, 
                                discover, and share their passion for reading. We believe that every book opens a new door to 
                                understanding, imagination, and connection.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We're dedicated to fostering a vibrant community where readers can connect, discuss, and grow 
                                together. Whether you're a casual reader or a literary enthusiast, BookScape is your home for 
                                meaningful literary discussions and discoveries.
                            </p>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">What We Offer</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Extensive Library</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Access to a vast collection of books across all genres and categories</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Community</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Connect with fellow readers and join book discussions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Personalization</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Curated recommendations based on your reading preferences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Creator Section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img 
                            src={profilePic}
                            alt="Supun Liyanage" 
                            className="rounded-full border border-black w-40 h-40 object-cover"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Created by Supun Liyanage</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Full-stack developer with a passion for creating meaningful digital experiences. 
                                BookScape is built with modern technologies and designed with user experience in mind.
                            </p>
                            <a 
                                href="https://supunliyanage.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                View Portfolio <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
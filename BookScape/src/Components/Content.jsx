import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Content.css';
import { faLightbulb, faBullhorn, faHeart, faSmile} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState(''); // New state for selected category
    const [inProp, setInProp] = useState(true);

    // This function fetches a random quote based on the selected category
    const fetchQuote = async (selectedCategory) => {
        try {
            let url = 'https://api.quotable.io/random';
            if (selectedCategory) {
                // Modify the URL to include the category if selected
                url = `https://api.quotable.io/random?tags=${selectedCategory}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched Quote:', data.content); // Log the quote
            console.log('Author:', data.author); // Log the author
            return { quote: data.content, author: data.author }; // Return both quote and author
        } catch (error) {
            console.error('Fetch Error:', error);
            return { quote: 'An error occurred. Please try again.', author: '' };
        }
    };

    // This effect runs when the category or page first loads
    useEffect(() => {
        const changeQuote = async () => {
            setInProp(false); // Start fade-out
            setTimeout(async () => {
                const { quote, author } = await fetchQuote(category); // Pass selected category
                setQuote(quote); // Update the quote
                setAuthor(author); // Update the author
                setInProp(true); // Start fade-in
            }, 1000); // Delay for fade-out to complete
        };

        changeQuote(); // Fetch quote immediately

        const intervalId = setInterval(changeQuote, 10000); // Fetch new quote every 10 seconds

        return () => clearInterval(intervalId);
    }, [category]); // Depend on category to refetch when it changes

    // Function to handle category change
    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory); // Set selected category
    };

    return (
        <div className="h-36 flex px-[21rem] gap-24">
            <div className="">
                <h2 className="text-2xl">Quote of the Day</h2>
                <div className="w-[20rem]">
                    <CSSTransition
                        in={inProp}
                        timeout={1000}
                        classNames="quote-fade"
                        unmountOnExit
                    >
                        <div className="mt-3">
                            <p className="quote">{quote}</p>
                            <p className="font-bold author">- {author}</p>
                        </div>
                    </CSSTransition>
                </div>
            </div>

            {/* Category Selection */}
            <div>
                <h2 className="text-2xl">Quote Categories</h2>
                    <ul className="text-lg font-thin mt-5">
                        <li>
                        <button
                            onClick={() => handleCategoryChange('inspirational')}
                            className="flex items-center justify-between py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-yellow-100 hover:text-yellow-600 hover:scale-105"
                        >
                            Inspirational
                            <FontAwesomeIcon icon={faLightbulb} className="ml-3 text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-125" />
                        </button>
                        </li>
                        <li>
                        <button
                            onClick={() => handleCategoryChange('motivational')}
                            className="flex items-center justify-between py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-100 hover:text-blue-600 hover:scale-105"
                        >
                            Motivational
                            <FontAwesomeIcon icon={faBullhorn} className="ml-3 text-blue-500 transition-all duration-300 ease-in-out transform hover:scale-125" />
                        </button>
                        </li>
                        <li>
                        <button
                            onClick={() => handleCategoryChange('love')}
                            className="flex items-center justify-between py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-100 hover:text-red-600 hover:scale-105"
                        >
                            Love
                            <FontAwesomeIcon icon={faHeart} className="ml-3 text-red-500 transition-all duration-300 ease-in-out transform hover:scale-125" />
                        </button>
                        </li>
                        <li>
                        <button
                            onClick={() => handleCategoryChange('life')}
                            className="flex items-center justify-between py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-green-100 hover:text-green-600 hover:scale-105"
                        >
                            Life
                            <FontAwesomeIcon icon={faSmile} className="ml-3 text-green-500 transition-all duration-300 ease-in-out transform hover:scale-125" />
                        </button>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Content;

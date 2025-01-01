import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Content.css';

const Content = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [inProp, setInProp] = useState(true);

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
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

    useEffect(() => {
        const changeQuote = async () => {
            setInProp(false); // Start fade-out
            setTimeout(async () => {
                const { quote, author } = await fetchQuote();
                setQuote(quote); // Update the quote
                setAuthor(author); // Update the author
                setInProp(true); // Start fade-in
            }, 1000); // Delay for fade-out to complete
        };

        changeQuote(); // Fetch quote immediately

        const intervalId = setInterval(changeQuote, 5000); // Fetch new quote every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="h-36">
            <h2>Quote of the Day</h2>
            <CSSTransition
                in={inProp}
                timeout={1000}
                classNames="quote-fade"
                unmountOnExit
            >
                <div>
                    <p className="quote">{quote}</p>
                    <p className="author">- {author}</p>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Content;

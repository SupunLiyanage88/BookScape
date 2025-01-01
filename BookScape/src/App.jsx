import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar.jsx";
import BookList from "./Components/BookList.jsx";
import Navigation from "./Components/Navigation.jsx";
import Body from "./Components/Body.jsx";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch books based on query and filters
  const fetchBooks = async (query, filters) => {
    try {
      let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
      
      // Add filters to the query string
      if (filters.category) apiUrl += `+subject:${filters.category}`;
      if (filters.language) apiUrl += `&langRestrict=${filters.language}`;
      if (filters.author) apiUrl += `+inauthor:${filters.author}`;
      
      const response = await axios.get(apiUrl);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`}>
      <div className="container mx-auto p-4">

        <Navigation />
        <Body />
        <SearchBar onSearch={fetchBooks} />
        <BookList books={books} />
      </div>




    </div>
  );
};

export default App;

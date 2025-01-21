import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar.jsx";
import BookList from "./Components/BookList.jsx";
import Navigation from "./Components/Navigation.jsx";
import Body from "./Components/Body.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import BookDetail from "./Components/BookDetail.jsx";
import Footer from "./Components/Footer.jsx";
import User from "./Components/User.jsx"; // Import the User component
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch books based on query and filters
  const fetchBooks = async (query, filters = {}) => {
    try {
      let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
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
    <Router>
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <div className="container mx-auto">
          <Navigation toggleDarkMode={toggleDarkMode} />
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  <Body />
                  <SearchBar onSearch={fetchBooks} />
                  <BookList books={books} />
                  <Footer />
                </>
              }
            />
            {/* Book Detail Route */}
            <Route path="/book/:id" element={<BookDetail />} />
            {/* User Profile Route */}
            <Route path="/user" element={<User />} />

            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

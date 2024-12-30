import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar.jsx";
import BookList from "./Components/BookList.jsx";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">BookScape</h1>
      <SearchBar onSearch={fetchBooks} />
      <BookList books={books} />
    </div>
  );
};

export default App;

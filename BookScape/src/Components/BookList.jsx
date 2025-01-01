import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 px-4 md:px-[20rem]">
      {books.map((book) => (
        <div key={book.id} className="border p-4 rounded shadow">
          <Link to={`/book/${book.id}`}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x193"}
              alt={book.volumeInfo.title}
              className="w-full h-40 object-cover mb-2"
            />
          </Link>
          <h2 className="text-lg font-bold">
            <Link to={`/book/${book.id}`} className="hover:underline">
              {book.volumeInfo.title}
            </Link>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-500">
            {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
          </p>
          <p className="text-gray-700 dark:text-gray-400 mt-2 text-sm line-clamp-3">
            {book.volumeInfo.description || "No description available."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;

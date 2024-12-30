import React from "react";

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {books.map((book) => (
        <div key={book.id} className="border p-4 rounded shadow">
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x193"}
            alt={book.volumeInfo.title}
            className="w-full h-40 object-cover mb-2"
          />
          <h2 className="text-lg font-bold">{book.volumeInfo.title}</h2>
          <p className="text-sm text-gray-600">
            {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
          </p>
          <p className="text-gray-700 mt-2 text-sm line-clamp-3">
            {book.volumeInfo.description || "No description available."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;

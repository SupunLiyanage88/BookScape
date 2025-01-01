import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaSpinner } from "react-icons/fa"; 

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load book details. Please try again later.");
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-6 text-xl">{error}</div>;
  }

  if (!book) {
    return <div className="text-center mt-6 text-xl">Book not found.</div>;
  }

  const { title, authors, description, imageLinks, publishedDate, publisher } = book.volumeInfo;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src={imageLinks?.thumbnail || "https://via.placeholder.com/128x193"}
            alt={title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-gray-800">{title}</h1>
          <p className="text-lg text-gray-600 mt-2">{authors?.join(", ") || "Unknown Author"}</p>
          <p className="text-sm text-gray-500 mt-1">{publisher} ({publishedDate})</p>
          <div className="mt-6 text-gray-700">
            <h3 className="font-semibold text-xl">Description:</h3>
            <p className="mt-3">{description || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

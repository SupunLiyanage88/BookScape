import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetailPage = () => {
  const { id } = useParams(); // Retrieve the book ID from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-4">Loading book details...</div>;
  }

  if (!book) {
    return <div className="text-center mt-4">Book not found.</div>;
  }

  const { title, authors, description, imageLinks, publishedDate, publisher } = book.volumeInfo;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={imageLinks?.thumbnail || "https://via.placeholder.com/128x193"}
          alt={title}
          className="w-48 h-64 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-600 text-lg mt-2">{authors?.join(", ") || "Unknown Author"}</p>
          <p className="text-sm text-gray-500 mt-1">{publisher} ({publishedDate})</p>
          <div className="mt-4 text-gray-700">
            <h3 className="font-semibold text-lg">Description:</h3>
            <p>{description || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

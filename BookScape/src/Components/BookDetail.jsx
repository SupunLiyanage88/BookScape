import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const { id } = useParams(); // Get the book ID from the route
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetail();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const {
    title,
    authors,
    description,
    imageLinks,
    publishedDate,
    pageCount,
    categories,
    language,
  } = book.volumeInfo;

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row items-start gap-4">
        <img
          src={imageLinks?.thumbnail || "https://via.placeholder.com/128x193"}
          alt={title}
          className="w-40 h-auto object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-gray-600">{authors?.join(", ") || "Unknown Author"}</p>
          <p className="text-sm mt-2">{categories?.join(", ") || "Uncategorized"}</p>
          <p className="text-sm mt-2">Published: {publishedDate || "Unknown"}</p>
          <p className="text-sm mt-2">Pages: {pageCount || "N/A"}</p>
          <p className="text-sm mt-2">Language: {language?.toUpperCase() || "Unknown"}</p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-gray-700 mt-2">{description || "No description available."}</p>
      </div>
    </div>
  );
};

export default BookDetail;

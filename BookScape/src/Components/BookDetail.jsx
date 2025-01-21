import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBookBookmark, 
  faBookOpen, 
  faLanguage,
  faCalendar,
  faTags
} from "@fortawesome/free-solid-svg-icons";

const BookDetail = () => {
  const { id } = useParams();
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
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading book details...</p>
        </div>
      </div>
    );
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Image */}
            <div className="md:w-1/3 bg-gray-100 p-8 flex items-center justify-center">
              <div className="relative group">
                <img
                  src={imageLinks?.thumbnail || "https://via.placeholder.com/128x193"}
                  alt={title}
                  className="w-64 h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:w-2/3 p-8">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                  <p className="text-lg text-gray-600">{authors?.join(", ") || "Unknown Author"}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <FontAwesomeIcon icon={faCalendar} className="text-blue-500" />
                    <span>{publishedDate || "Unknown"}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <FontAwesomeIcon icon={faBookOpen} className="text-blue-500" />
                    <span>{pageCount ? `${pageCount} pages` : "N/A"}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <FontAwesomeIcon icon={faLanguage} className="text-blue-500" />
                    <span>{language?.toUpperCase() || "Unknown"}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <FontAwesomeIcon icon={faTags} className="text-blue-500" />
                    <span className="truncate">{categories?.join(", ") || "Uncategorized"}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">About this book</h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {description || "No description available."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetail;
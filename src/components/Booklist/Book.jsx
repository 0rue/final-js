import React from "react";
import { Link } from 'react-router-dom';
import "./Booklist.css";

const Book = ({ cover }) => {
  // Check if 'cover' is undefined or null
  if (!cover) {
    return null; // or return a placeholder/error message
  }

  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        {cover.img && <img src={cover.img} alt="cover" />}
      </div>
      <div className='book-item-info text-center'>
        {/* Check if 'id' is defined in 'cover' */}
        {cover.id && (
          <Link to={`/book/${cover.id}`} {...cover}>
            <div className='book-item-info-item title fw-7 fs-18'>
              <span>{cover.title}</span>
            </div>
          </Link>
        )}

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          {/* Check if 'author' is defined in 'cover' */}
          <span>{cover.author ? cover.author.join(", ") : 'Unknown Author'}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          {/* Check if 'edition_count' is defined in 'cover' */}
          <span>{cover.edition_count ?? 'Unknown'}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          {/* Check if 'first_publish_year' is defined in 'cover' */}
          <span>{cover.first_publish_year ?? 'Unknown'}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;

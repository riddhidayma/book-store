import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaShoppingCart } from "react-icons/fa";

const BookCards = ({ headline, books }) => {
  console.log(books); // Optional: can be removed in production

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

      {/* Cards */}
      <div className='mt-22'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            books && books.length > 0 ? (
              books.map(book => (
                <SwiperSlide key={book._id}>
                  <Link to={`/book/${book._id}`}> {/* Link to a specific book's detail page */}
                    <div className='relative'>
                      <img
                        src={book.imageURL} 
                        alt={book.bookTitle} 
                        className="w-full h-auto object-cover" // Ensure full width and maintain aspect ratio
                      />
                      <div className='bg-blue-600 hover:bg-black p-2 rounded absolute top-2 right-2'>
                        <FaShoppingCart className='w-4 h-4 text-white' />
                      </div>
                    </div>
                    <div className="mt-2">
                      <h3 className='font-bold'>{book.bookTitle}</h3>
                      <p className='text-sm text-gray-600'>{book.authorName}</p>
                      <p className='font-semibold text-lg'>$10.00</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            ) : (
              <div>No books available</div> // Fallback for when there are no books
            )
          }
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;

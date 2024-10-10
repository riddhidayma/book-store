import React from 'react';
import FavBookImg from "../assets/banner-books/favoritebook.jpg";
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt="Favorite Book" className='rounded md:w-10/12' />
      </div>

      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
          Find Your Favorite <span className='text-blue-700'>Book Here!</span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6'>
        Welcome to our literary haven, where your next favorite book awaits! Explore our diverse collection, meticulously curated to cater to every taste and interest. Whether you’re searching for a gripping thriller, an inspiring memoir, or a timeless classic, we have something that will resonate with you. Dive into captivating stories and thought-provoking insights that ignite your imagination and enrich your life. Start your journey today and discover the book that will become your new favorite!
        </p>
        {/*stats*/}
        <div className='flex flex-col md:flex-row justify-between gap-6 md:w-3/4 my-14'>
        <div>
          <h3 className='text-3xl font-bold'>800+</h3>
          <p className='text-base'>Book Listings</p>
        </div>
        <div>
          <h3 className='text-3xl font-bold'>550</h3>
          <p className='text-base'>Registered Users</p>
        </div>
        <div>
          <h3 className='text-3xl font-bold'>1200+</h3>
          <p className='text-base'>PDF Downloads</p>
        </div>
      </div>

      <Link to = "/shop" className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
    </div>
    </div>
  );
};

export default FavBook;

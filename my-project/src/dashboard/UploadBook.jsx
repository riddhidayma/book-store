import React, { useState } from 'react';
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Biography",
    "History",
    "Self-Help", 
    "Romance", 
    "Thriller", 
    "Children's",
    "Travel",
    "Religion",
    "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleCategoryChange = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value); // Corrected spelling of function
  };

  // Handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value; 
    const imageURL = form.imageURL.value; 
    const category = form.categoryName.value; // Use name attribute to get the category
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    };

    console.log(bookObj);

    // Send data to db
    fetch("http://localhost:3000/upload-book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("Book Uploaded Successfully!!!");
      console.log(data);
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

         {/* First row */}
        <div className='flex gap-8'>
          {/* Book name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle" // Add name attribute
              type="text"
              placeholder="Book Name"
              required
            />
          </div>

          {/* Author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName" // Add name attribute
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        {/* Second row */}
        <div className='flex gap-8'>
          {/* Image URL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL" // Add name attribute
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id='inputState'
              name='categoryName' // This is already correct
              className='w-full rounded'
              value={selectedBookCategory}
              onChange={handleCategoryChange} // Updated function name
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* Third row */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name='bookDescription' // Add name attribute
            required
            rows={6}
            placeholder="Book Description"
            className='w-full'
          />
        </div>

        {/* Book PDF link */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF" />
          </div>
          <TextInput
            id="bookPDFURL"
            name='bookPDFURL' // Add name attribute
            type="text"
            placeholder="Book PDF URL"
            required
          />
        </div>

        <Button
          type="submit"
          className='mt-5 bg-slate-600 hover:bg-slate-900 text-white flex justify-center items-center'
        >
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;

import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Book from "./Book";
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return axios.get(URL)
    .then((res) => {
      const data = res.data;
      // console.log("Fetched data:", data); // Log fetched data
      return data;
    })
    .catch((error) => {
      // console.error('Error fetching data:', error);
      return [];
    });
};

const Books = () => {
    const [books, setBooks] = useState([]); // Initialize with an empty array
    useEffect(() => {
      // console.log("end product", books);
      fetchHandler().then((data) => setBooks(data))
    }, []);
  // let b = books["books"];
  // console.log("hi", books["books"]);
  // console.log(books);

  return (
    <div>
      <Book books={books} />
    </div>
  );
}

export default Books;
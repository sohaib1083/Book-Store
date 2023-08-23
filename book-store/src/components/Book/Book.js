import { Button } from '@mui/material';
import React from 'react'

const Book = ({books}) => {
  console.log(books);
    let bx = books["books"];
    console.log(bx[0]);

return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={book._id}>
            <img src={book.image} alt={book.bookname} />
            <article>Author: {book.author}</article>
            <h3>{book.bookname}</h3>
            <p>Description: {book.description}</p>
            <h2>Rs {book.price}</h2>
            <Button>Update</Button>
            <Button>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};    



export default Book;
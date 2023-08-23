import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
const URL = "http://localhost:5000/books";

const fetchHandler = async()=>{
  return await axios.get(URL).then((res)=> res.data) 
}

const Books = () => {
  const [books, setbooks] = useState();
  useEffect(() => {

    fetchHandler().then(data=>setbooks(data.books))
  }, [])

  console.log(books);

  return (
    <div>This is the book display section</div>
  )
}

export default Books
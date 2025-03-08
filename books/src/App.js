import React, { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [books,setbooks] = useState([])

  const fetchBooks = async()=>{
    const response = await axios.get('http://localhost:3001/books')
    setbooks(response.data)
  }
  
  useEffect(()=>{
    fetchBooks()
    
  },[])

  const createBook = async(title)=>{

    const response = await axios.post('http://localhost:3001/books',{
      title
    })
      setbooks(
        [...books, response.data])
  }

  const deleteBookById = async (id)=>{
      const response = await axios.delete(`http://localhost:3001/books/${id}`)
      console.log(response)
      const updatedBooks = books.filter((book) => book.id !== id)
      setbooks(updatedBooks)
  }

  const editBook = async (id,title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title
    })

    
    const updatedBooks = books.map((book)=>{
        if (book.id === id) {
            return {...book , ...response.data}
        }

        return book
    })
    
    setbooks(updatedBooks)
    
  }

  return (
    <div className='app'>
           <h1>Reading list</h1>
          <BookList books ={books} onDelete = {deleteBookById} editBook={editBook} />
          <BookCreate onCreate = {createBook}/>
    </div>
  )
}

export default App

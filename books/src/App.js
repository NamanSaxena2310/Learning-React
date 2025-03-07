import React, { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books,setbooks] = useState([])

  const createBook = (title)=>{
      setbooks(
        [...books,
        {id: Math.round(Math.random()* 999) ,title}
        ])
  }

  const deleteBookById = (id)=>{
      const updatedBooks = books.filter((book) => book.id !== id)
      setbooks(updatedBooks)
  }

  const editBook = (id,title) => {
    const updatedBooks = books.map((book)=>{
        if (book.id === id) {
            return {...book , title}
        }

        return book
    })
    console.log(updatedBooks)
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

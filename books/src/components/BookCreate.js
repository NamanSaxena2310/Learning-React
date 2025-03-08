import React, { useContext, useState } from 'react'
import BooksContext from '../context/books'

function BookCreate() {
  const {createBook} = useContext(BooksContext)
  const [title , setTitle] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    createBook(title)
    setTitle('')
  }
  return (
    <div className='book-create'>
    <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' className='input' value={title} onChange={(e)=> setTitle(e.target
        .value)} placeholder='Title of the book'/>
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default BookCreate

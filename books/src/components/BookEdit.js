import React, { useContext, useState } from 'react'
import BooksContext from '../context/books'

function BookEdit({book,onSubmit}) {
  const {editBook} = useContext(BooksContext)
  const [title ,setTitle] = useState(book.title)

  const handleChange =(e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    onSubmit()
    editBook(book.id, title)
  }

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label> Title </label>
      <input onChange={handleChange} value={title} className='input'/>
      <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit

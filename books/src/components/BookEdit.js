import React, { useState } from 'react'

function BookEdit({book,editBook,onSubmit}) {
  const [title ,setTitle] = useState(book.title)

  const handleChange =(e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    onSubmit(book.id,title)
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

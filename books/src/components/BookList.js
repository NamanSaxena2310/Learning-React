import React from 'react'
import BookShow from './BookShow'

function BookList({books,onDelete,editBook}) {
  const renderBooksList = books.map((book)=><BookShow key={book.id} book={book} onDelete={onDelete} editBook= {editBook} />)
  return (
    <div className='book-list'>
      {renderBooksList}
    </div>
  )
}

export default BookList

import React, { useContext, useState } from 'react'
import BookEdit from './BookEdit'
import BooksContext from '../context/books'

function BookShow({book}) {
  const {deleteBookById} = useContext(BooksContext)
  const [showEdit,setShowEdit] = useState(false)
  const handleDeleteClick = () =>{
    deleteBookById(book.id)
  }


  const handleEditClick = () =>{
    setShowEdit(!showEdit)
  }

  const handleSubmit = ()=>{
    setShowEdit(false)
  }

  let content = <h3>{book.title}</h3>

  if (showEdit) {
    content = <BookEdit book = {book} onSubmit= {handleSubmit}/>
  }

  return (
    <div className='book-show'>
    <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books'/>
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}></button>
        <button className='delete' onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow

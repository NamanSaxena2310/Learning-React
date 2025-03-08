import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext()

function Provider({children}) {
    const [books,setbooks] = useState([])
    
      const fetchBooks = async()=>{
        const response = await axios.get('http://localhost:3001/books')
        setbooks(response.data)
      }


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

      const valueToShare = {
        books,
        deleteBookById,
        editBook,
        createBook,
        fetchBooks
      }

    return <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
}

export {Provider}
export default BooksContext
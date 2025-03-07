import React, { useState } from 'react'
import './SearchBar.css'
function SearchBar({onSubmit}) {
  const [searchTerm,setSearchterm] = useState('')
  const handleFormSubmit =(e)=>{ 
    e.preventDefault()
    
    onSubmit(searchTerm)
  }

  
  return (
    <div className='search-bar'>

    <form onSubmit={handleFormSubmit}>
    
       <input  type='text' value={searchTerm} onChange={(e)=>{setSearchterm(e.target.value)}} placeholder='Enter your search term'/>
    </form>
   
      
    </div>
  )
}

export default SearchBar

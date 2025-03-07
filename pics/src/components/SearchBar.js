import React, { useState } from 'react'

function SearchBar({onSubmit}) {
  const [searchTerm,setSearchterm] = useState('')
  const handleFormSubmit =(e)=>{ 
    e.preventDefault()
    
    onSubmit(searchTerm)
  }

  
  return (
    <div>

    <form onSubmit={handleFormSubmit}>
       <input type='text' value={searchTerm} onChange={(e)=>{setSearchterm(e.target.value)}} placeholder='Enter your search query'/>
    </form>
   
      
    </div>
  )
}

export default SearchBar

import React, { useState } from 'react'

function Dropdown({options,onSelect,selection}) {
  const [isOpen,setIsOpen] = useState(false)

  const handleOptionClick = (option)=>{
    onSelect(option)
    setIsOpen(false)
  }

  const renderedOptions = options.map((option)=>{
    return (
      <div onClick={()=>handleOptionClick(option)} key={option.value}>
          {option.label}  
      </div>
    )
  })

  const handleToggleClick = ()=>{
      setIsOpen((currentIsOpen)=>!currentIsOpen)
  }

  return (
    <div>
      <div onClick={handleToggleClick}>{selection ? selection.label : "Select..."}</div>
       {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown

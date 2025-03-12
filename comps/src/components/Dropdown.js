import React, { useState } from 'react'
import '../index.css'
import { GoChevronDown } from 'react-icons/go'
import Panel from './Panel'

function Dropdown({options,onSelect,selection}) {
  const [isOpen,setIsOpen] = useState(false)

  const handleOptionClick = (option)=>{
    onSelect(option)
    setIsOpen(false)
  }

  const renderedOptions = options.map((option)=>{
    return (
      <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={()=>handleOptionClick(option)} key={option.value}>
          {option.label}  
      </div>
    )
  })

  const handleToggleClick = ()=>{
      setIsOpen((currentIsOpen)=>!currentIsOpen)
  }

  return (
    <div className='w-48 relative'>
      <Panel className='flex justify-between items-center cursor-pointer  bg-white ' onClick={handleToggleClick}>{selection?.label || "Select..."}
      <GoChevronDown className='text-lg'/></Panel>
      
       {isOpen && <Panel className='absolute top-full  bg-white '>{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown

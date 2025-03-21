import React, { useState } from 'react'
import { GoChevronDown,GoChevronLeft } from 'react-icons/go'
import '../index.css'
function Accordion({items}) {
  const [expandedIndex,setExpandedIndex] = useState(0)

    const renderedItems = items.map((item,index)=>{
      const isExpanded  = index === expandedIndex
      
      const icon = <span className='text-2xl'>
        {isExpanded? <GoChevronDown/> : <GoChevronLeft/>}
      </span>
      return(

        <div key={item.id}>
          <div className='flex p-3 bg-gray-200 border-b items-center cursor-pointer justify-between' onClick={()=> expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index)}>
          
          {item.label}
          {icon}
          </div>
          { isExpanded && <div className='border-p p-5'>{item.content}</div>}
        </div>
      )
    })
  return (
    <div className='border-x border-t rounded'>
      {renderedItems}
    </div>
  )
}

export default Accordion

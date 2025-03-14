import React, { useEffect } from 'react'
import '../index.css'
import ReactDOM from 'react-dom'
function Modal({onClose,children,actionBar}) {
  useEffect(()=>{
    document.body.classList.add('overflow-hidden')
    console.log('useEffect')
    return () => {
      console.log("Modal removed")
      document.body.classList.remove('overflow-hidden')
    }
  },[])
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className='absolute inset-0 bg-gray-300 opacity-80'>

      </div>

      <div className='absolute inset-40 p-10 bg-white'>
      <div className='flex flex-col justify-between h-full'>
      {children}
      <div className='flex justify-end'>
      {actionBar}
      </div>
      
      </div>
     
       </div>
    </div>,
    document.querySelector('.modal-container')
  )
  
}

export default Modal

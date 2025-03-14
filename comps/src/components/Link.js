import React, { useContext } from 'react'
import NavigationContext from '../context/navigation'
import classNames from 'classnames'
import '../index.css'
function Link({to,children,className,activeClassName}) {
  const {navigate,currentpath} = useContext(NavigationContext)
  const handleClick = (event)=>{
      event.preventDefault()
      navigate(to)
  }

  

  const classes = classNames('text-blue-500', className, currentpath === to && activeClassName)
  
  return (
    <a className= {classes} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link

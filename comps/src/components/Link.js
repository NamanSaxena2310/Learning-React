import React, { useContext } from 'react'
import NavigationContext from '../context/navigation'
import classNames from 'classnames'
import '../index.css'
function Link({to,children}) {
  const {navigate} = useContext(NavigationContext)
  const handleClick = (e)=>{
    if (e.ctrlKey || e.metaKey) {
      return
    }
      e.preventDefault()
      navigate(to)
  }

  const classes = classNames('text-blue-500')

  return (
    <a className= {classes} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default Link

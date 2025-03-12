import React, { useContext } from 'react'
import NavigationContext from '../context/navigation'

function Route({path,children}) {
   const {currentpath} = useContext(NavigationContext)

   if (path === currentpath) {
      return children

   }

   return null
  
}

export default Route

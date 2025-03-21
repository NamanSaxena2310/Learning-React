import { createContext, useContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children})=>{
    const [currentpath,setCurrentPath] = useState(window.location.pathname)
    
    useEffect(()=>{
      const handler = ()=>{
          setCurrentPath(window.location.pathname)
      }

      window.addEventListener('popstate',handler)

      return ()=> window.removeEventListener('popstate',handler)      
    },[])

    const navigate = (to) => {
      window.history.pushState({},'', to)
      setCurrentPath(to)
    }

  return <NavigationContext.Provider value = {{navigate,currentpath}}>
  {children}
  </NavigationContext.Provider>
}

export {NavigationProvider}
export default NavigationContext
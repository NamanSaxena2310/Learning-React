// Import react and react-dom libraries

import React from "react"; // The purpose of React library is to create create component and how components communicate or works together 
import ReactDOM from "react-dom/client" // The purpose of this library is to figure out how to show the components on the browser there is another library cal react-navtive for mobile application 

// Get a reference of the div inside index.html
const element = document.getElementById('root')

// tell react to take control of the div
const root = ReactDOM.createRoot(element)

// create a component 
function App(){
  return <h1>Hi There!</h1>
}

// show the component on the screen
root.render(<App />)
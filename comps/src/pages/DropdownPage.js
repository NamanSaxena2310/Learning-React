
import { useState } from 'react'
import Dropdown from '../components/Dropdown'



function DropdownPage() {
  const [selection,setSelection] = useState(null)

const handleSelect = (option) => {
  setSelection(option)
}
  const options = [
    {
      label : "Red",
      value: 'red'
    },
    {
      label : "Green",
      value: 'green'
    },
    {
      label : "Blue",
      value: 'blue'
    }
  ]
  return (
    <div className='flex'>
      <Dropdown  options= {options} onSelect = {handleSelect} selection={selection} />
      <Dropdown  options= {options} onSelect = {handleSelect} selection={selection} />
      <Dropdown  options= {options} onSelect = {handleSelect} selection={selection} />

     
    </div>
  )
}

export default DropdownPage

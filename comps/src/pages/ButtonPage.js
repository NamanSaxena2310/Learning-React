import React from 'react'
import Button from '../components/Button'
import "../index.css"


import { GoBell,GoCloudOffline,GoDatabase } from 'react-icons/go'
function ButtonPage() {
  const handleClick = ()=>{
    console.log("click")
  }
  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
           <GoBell />
            Click me!
        </Button>
      </div>
      <div>
        <Button secondary onMouseEnter = {handleClick}>
        <GoCloudOffline/>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success rounded onMouseLeave = {handleClick}>
        <GoDatabase/>
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning >
          Sell Now!
        </Button>
      </div>

      <div>
        <Button danger>
          Sell Now!
        </Button>
      </div>
      
    </div>
  )
}

export default ButtonPage

import 'bulma/css/bulma.css'
import React from 'react'
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
function App() {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistance </p>
        </div>
      </section>
      


      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
            <ProfileCard
            title = "Alexa"
            handle = "@alexa01"
            image = {AlexaImage} 
            description ='Alexa was created by Amazon and helps you buy things'
            />
            </div>
            <div className='column is-4'>
            <ProfileCard
            title = "Cortana"
            handle = "@cortana02"
            image ={CortanaImage}
            description = 'Cortana was created by microsoft Wo knows what is does '  
            />
            </div>
            <div className='column is-4'>
            <ProfileCard 
            title = "Siri" 
            handle = "@siri@03"
            image = {SiriImage}
            description="Siri was made by Apple and it is phased out. fixing the gap"
            />
            </div>
          </div>
        </section>
      </div>
    
    
      
    </div>
  )
}

export default App
